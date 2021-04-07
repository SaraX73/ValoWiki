//load environment variables from .env file
require("dotenv").config();

//Dependency directories
const Discord = require("discord.js");
const fs = require("fs");
const x73db = require("x73db");
const cdn = require("./utils/cdn");
const configs = require("./configs.json");
const defaults = require("./defaults.json");

//classes construction
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const commands = new Discord.Collection();
const databases = {
    guilds: new x73db("guilds",{path: "DiscordDB"}),
    users: new x73db("users",{path: "DiscordDB"})
}

//loading commands files
const commandsFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
for(let file of commandsFiles){
    try {
        let cmd = require(`./commands/${file}`);
        cmd.name = file.slice(0,file.length - 3);
        commands.set(cmd.name,cmd);
    } catch (e) {
        console.error(`Error: command load failed (${file}) -> ${e}`);
    }
};

//build in client
client.commands = commands;
client.configs = configs;
client.cdn = cdn;
client.baseEmbed = baseEmbed;
client.getArgs = getArgs;
client.cooldowns = cooldowns;
client.databases = databases;
client.defaults = defaults;
client.getPrefix = getPrefix;
client.getGuild = getGuild;

//connect to discord api using bot token from .env file 
client.login(process.env['DISCORD_TOKEN']);

//client "ready" event
client.on("ready",() => console.log(client.user.tag));

//client "message" events
client.on("message",async(message) => {
    
//before loading command
    //ignore Dm's and bots
    if(!message.guild || message.author.bot) return;

    //get guild prefix
    let prefix = getPrefix(message.guild);

    //check message prefix
    if(!message.content.startsWith(prefix)) return;

    //get message args
    let args = getArgs(message.content);

    //check if user is asking for prefix
    if(cPrefix(message,prefix)) return;


//loading the command
    //get the required command name/alias
    let commandName = args.shift().toLowerCase().slice(prefix.length);

    //try to get command data
    let command = commands.get(commandName) || commands.find(c => c.aliases && c.es.includes(commandName));

    //stop if no command loaded
    if(!command) return;


//check user & command configs before running it
    //check if this command is ignored (ex: template.js)
    if(configs.ignored_commands.includes(command.name)) return sendErrMsg(message,"ignored_command",commandName);

    //check channel type and "guildOnly" option (now useless, will help later)
    if(command.guildOnly && !message.guild) return sendErrMsg(message,"guild_only",commandName);

    //check the user and "devOnly" option
    if(command.devOnly && !configs.devs.includes(message.author.id)) return sendErrMsg(message,"dev_only",commandName);

    //check if the user have the required permissions to run this command
    if(command.permissions && !message.member.permissionsIn(message.channel).has(command.permissions)) return sendErrMsg(message,"dev_only",command);

    //check if the user is under cooldown for this command
    if(command.cooldown) {

        //create timestamps for this command if not exist
        if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Discord.Collection());

        //get currect time 
        const now = Date.now();

        //get cooldowns for the command
        const timestamps = cooldowns.get(command.name);

        //convert cooldown from secends to milliseconds
        const cooldownAmount = (command.cooldown || 0) * 1000;

        //check if the user in cooldown-list for this command
        if (timestamps.has(message.author.id)) {

            //get cooldown expiration time
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            //check if expirationTime isn't ended yet
            if (now < expirationTime) {

                //get the left time (by seconds)
                const timeLeft = (expirationTime - now) / 1000;

                //reply to the user and stop
                return sendErrMsg(message,"cooldown",{command,timeLeft: timeLeft.toFixed(0)});
            }
        }
        
        //add the user to the cooldown-list
        timestamps.set(message.author.id, now);

        //remove the user from the cooldown-list after the time ends
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    //now finally run the command
    try {
        //excute the command
        command.run();

    } catch(e) {
        //send the error to the user if there is any
        message.reply(baseEmbed(message).setTitle("Error!").setDescription(`\`\`\`${e}\`\`\``));
    };
})


//////////////
//functions
    //check if bot is mentioned and user is asking for prefix
    function cPrefix(message,prefix) {
        //get args from the message
        let args = getArgs(message.content);
        //check if the bot mentioned
        if(message.mentions.members.size && message.mentions.members.first() ==  client.user.id){

            //chech the other args before reply
            if((!args[1] || args[1] == "" || args[1] == "prefix") && (!args[2] || args[2] == "")){

                //reply to the user
                let embed = baseEmbed(message)
                    .setDescription(`**My prefix is:** \`${prefix}\``);
                message.reply(embed);

                return true
            }
        }
        return false
    }

    //get args from string
    function getArgs(str = new String()) {
        //return an array (string but all spaces " " splited)
        return str.split(/ +/)
    }

    //base bot embed
    function baseEmbed(message = new Discord.Message()) {
        return new Discord.MessageEmbed()
                        .setColor(client.configs['embed_color'])
                        .setTimestamp(Date.now())
                        .setFooter(message.author.tag,message.author.displayAvatarURL({dynamic: true}))
                        .setThumbnail(cdn['utils']['gameIcons']['icon_2'])
    }

    //get guild prefix
    function getPrefix(guild) {
        //get guild data
        let data = getGuild(guild.id)

        //get prefix from that data
        let {prefix} = data;

        //return the prefix
        return prefix
    }

    // get/create guild data by ID
    function getGuild(id = String()) {
        //get guild data
        let data = databases.guilds.get(id);

        //get the guild data again in other variable
        let oData = databases.guilds.get(id);

        //check if there is any options in ${data} variable
        if(!data) {
            //set ${data} variable to defult options
            data = defaults.guilds;
        } else {
            //check all options one-by-one and set it to defult if not exist
            for(let [key,value] of Object.entries(defaults)) {
                if(!data[key]) data[key] = value;
            }
        }

        //save the data if there is any changes
        if(data !== oData) databases.guilds.set(id);

        //return the data
        return data;
    }

    //some basic error messages
    function sendErrMsg(message,code,data) {
        //load the basic embed
        let embed = baseEmbed();
        
        //edit the embed (based in data and the error code)
        switch(code) {
            //return if code not found
            default:return;break;

            //if the command for guilds only
            case "guild_only":
            embed.setTitle(`Sorry!`);
            embed.setDescription(`\`${data}\` command is for guild only`)
            break;

            //if the command for developers only
            case "dev_only":
            embed.setTitle(`Sorry!`);
            embed.setDescription(`\`${data}\` command is for bot devlopers only`)
            break;

        }
        if(embed == baseEmbed()) return;
        message.reply()
        return;
    }