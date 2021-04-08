//load environment variables from .env file
require("dotenv").config();

//Dependency directories
    //discord library
    const Discord = require("discord.js");

    //nodeJS files system
    const fs = require("fs");

    //my own databases package :")
    const x73db = require("x73db");

    //cdn manager
    const cdn = require("./utils/cdn");

    //metadata manager
    const metadata = require("./utils/metadata")

    //bot configs
    const configs = require("./configs.json");

    //default users/guilds sittings
    const defaults = require("./defaults.json");

//classes construction
    //discord client
    const client = new Discord.Client();

    //empty collection for cooldowns data
    const cooldowns = new Discord.Collection();

    //empty collection for commands data
    const commands = new Discord.Collection();

    //empty collection for errors cooldowns data
    const reportedErrors = new Discord.Collection();

    //bot databases
    const databases = {
    guilds: new x73db("guilds",{path: "DiscordDB"}),
    users: new x73db("users",{path: "DiscordDB"})
};

//loading commands
    //load commands files list
    const commandsFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

    //loop on that list
    for(let file of commandsFiles){
        try {
            //load command file data
            let cmd = require(`./commands/${file}`);

            //set "command.name" to file-name (.js removed)
            cmd.name = file.slice(0,file.length - 3);

            //add data to commands list
            commands.set(cmd.name,cmd);
        } catch (e) {
           //log there is an error while trying to load that command
            console.error(`Error: command load failed (${file}) -> ${e}`);
        }
};

//build in client
client.commands = commands;//collection
client.configs = configs;//object -> any
client.cdn = cdn;//object*object -> string
client.baseEmbed = baseEmbed;//function(class) -> (class)
client.getArgs = getArgs;//function(string) -> (array -> string)
client.cooldowns = cooldowns;//collection
client.databases = databases;//object -> class
client.defaults = defaults;//object*object -> any
client.getPrefix = getPrefix;//function(class) -> (string)
client.getGuild = getGuild;//function(string) -> (object -> any)
client.reportedErrors = reportedErrors;//collection
client.sendErrMsg = sendErrMsg;//function(class,string,object,any) -> (null)
client.errSendable = errSendable;//function(class,string,objec) -> (bool)
client.getErrCode = getErrCode;//function(class,string,object) -> (string)
client.metadata = metadata;//object*object -> any

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
    let command = commands.get(commandName) || commands.find(c => c.aliases && c.aliases.includes(commandName));

    //stop if no command loaded
    if(!command) return;


//check user & command configs before running it
    //check if this command is ignored (ex: template.js)
    if(command.ignored) return sendErrMsg(message,"ignored_command",command);

    //check channel type and "guildOnly" option (now useless, will help later)
    if(command.guildOnly && !message.guild) return sendErrMsg(message,"guild_only",command);

    //check the user and "devOnly" option
    if(command.devOnly && !configs.devs.includes(message.author.id)) return sendErrMsg(message,"dev_only",command);

    //check if the user have the required permissions to run this command
    if(command.permissions && !message.member.permissionsIn(message.channel).has(command.permissions)) return sendErrMsg(message,"no_permissions",command);

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
                const timeLeft = Math.ceil((expirationTime - now) / 1000);

                //reply to the user and stop
                return sendErrMsg(message,"cooldown",command,timeLeft);
            };
        };
        
        //add the user to the cooldown-list
        timestamps.set(message.author.id, now);

        //remove the user from the cooldown-list after the time ends
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    };

    //now finally run the command
    try {
        //excute the command
        command.run(message,args);

    } catch(e) {
        //send the error to the user if there is any
        message.reply(baseEmbed(message).setTitle("Error!").setDescription(`\`\`\`${e}\`\`\``));
    };
});


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

                return true;
            };
        };
        return false;
    };

    //get args from string
    function getArgs(str = new String()) {
        //return an array (string but all spaces " " splited)
        return str.split(/ +/);
    };

    //base bot embed
    function baseEmbed(message = new Discord.Message()) {
        return new Discord.MessageEmbed()
                        .setColor(client.configs['embed_color'])
                        .setTimestamp(Date.now())
                        .setFooter(message.author.tag,message.author.displayAvatarURL({dynamic: true}))
                        .setThumbnail(cdn['utils']['gameIcons']['icon_2']);
    };

    //get guild prefix
    function getPrefix(guild) {
        //get guild data
        let data = getGuild(guild.id);

        //get prefix from that data
        let {prefix} = data;

        //return the prefix
        return prefix;
    };

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
            for(let [key,value] of Object.entries(defaults.guilds)) {
                if(!data[key]) data[key] = value;
            };
        };

        //save the data if there is any changes
        if(data !== oData) databases.guilds.set(id,data);

        //return the data
        return data;
    };

    //some basic error messages
    function sendErrMsg(message,code,command,data) {
        //load the basic embed
        let embed = baseEmbed(message);

        //check if should send error embed or just ignore the user
        if(!errSendable(message,code,command)) return;
        
        //edit the embed (based in data and the error code)
        switch(code) {

            //if the command is ignored
            case "ignored_command": 
                //do nothing right now
            break;
            
            //if the command for guilds only
            case "guild_only":
                //change the embed data
                embed.setTitle(`Sorry!`);
                embed.setDescription(`\`${command.name}\` command is for **guilds** only`);
            break;

            //if the command for developers only
            case "dev_only":
                //change the embed data
                embed.setTitle(`Sorry!`);
                embed.setDescription(`\`${command.name}\` command is for **bot devlopers** only`);
            break;

            //if the user don't have the required permissions to run the command
            case "no_permissions":

            //if it's single permission required
            if(typeof command.permissions == "string") {

            //process the permission to be user-friendly
            let missing_prem = command.permissions.toLowerCase().split("_").join(" ");
                //change the embed data
                embed.setTitle(`Sorry!`);
                embed.setDescription(`You need \`${missing_prem}\` permission in this **server/channel** to run ${command.name} command`);

            //else: if it's array for permissions
            } else {

            //new variable (will be array of missing permissions)
            let missing_prems = [];

                //loop on the required permissions one-by-one
                for(let prem of command.permissions){
                    //if the user don't have the correct permissions, add it to missing permissions list
                    if(!message.member.permissionsIn(message.channel).has(prem)) missing_prems.push(prem);
                };
            
            //process the permissions to be user-friendly
            missing_prems = missing_prems.map(prem => prem.toLowerCase().split("_").join(" "));

            //change the embed data
            embed.setTitle(`Sorry!`);
            embed.setDescription(`\`${missing_prems.join("\`**,**\`")}\` permission(s) are missing, you need them to run \`${command.name}\` command in this **server/channel** `);
            };

            break;

            //if the user is under-cooldown
            case "cooldown":
                //change the embed data
                embed.setTitle(`Sorry!`);
                embed.setDescription(`You have to wait \`${data}\` **second(s)** before be able to use \`${command.name}\` command again`);
            break;

            //return if code not found
            default:return;

        };
        
        //stop if there isn't any changes to the embed
        let newEmbed = baseEmbed(message);
        if(embed.title == newEmbed.title && embed.description == newEmbed.description) return;

        //set embed thumbnail
        embed.setThumbnail(cdn['utils']['errors']['warn']);
        //send the embed
        message.reply(embed);
    };

    //check if the bot should send the error (anit-err-spam)
    function errSendable(message,code,command) {

        //get currect time 
        const now = Date.now();

        //get full error code
        let errCode = getErrCode(message,code,command);

        //if this error reported recently
        if(reportedErrors.has(errCode)) {
            //get ends time for the error
            const endsTime = reportedErrors.get(errCode);

            //if time not ends yet
            if(now < endsTime) {
                //return FALSE to tell the code to stop
                return false;
            } else {
                //remove the user
                reportedErrors.delete(errCode);

                //retrun TRUE to tell the code to continue
                return true;
            };

        //else add this user
        } else {
            //get ends time
            let endsTime = now + configs['error_cooldown'];

            //add the user
            reportedErrors.set(errCode,endsTime);

            //remove the user after the time ends
            setTimeout(() => reportedErrors.delete(errCode),configs['error_cooldown']);

            //retrun TRUE to tell the code to continue
            return true;
        };
    };

    //get full error code
    function getErrCode (message,code,command) {
        return `command:${command.name};_code:${code};_user:${message.author.id};`
    };