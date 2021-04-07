//load environment variables from .env file
require("dotenv").config();

//Dependency directories
const Discord = require("discord.js");
const fs = require("fs");
const cdn = require("./utils/cdn");

//classes construction
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const commands = new Discord.Collection();

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

//load configs.json file
const configs = require("./configs.json");

//build in client
client.commands = commands;
client.configs = configs;
client.cdn = cdn;
client.baseEmbed = baseEmbed;
client.getArgs = getArgs;
client.cooldowns = cooldowns;

//connect to discord api using bot token from .env file 
client.login(process.env['DISCORD_TOKEN']);

//client "ready" event
client.on("ready",() => console.log(client.user.tag));

//client "message" events
client.on("message",async(message) => {
    if(!message.guild || message.author.bot) return;//ignore Dm's and bots

    let prefix = configs['prefix'];//temp

    if(!message.content.startsWith(prefix)) return;//check message prefix
    let args = getArgs(message.content);//check the function for info
    if(fn1(message,prefix)) return;//check the function for info

    let commandName = args.shift().toLowerCase().slice(prefix.length);//get the required command
    let command = commands.get(commandName) || commands.find(c => c.aliases && c.aliases.includes(commandName));//load command file
    if(!command) return;//stop if no command loaded

    if(configs.ignored_commands.includes(command.name)) return;//check if this command is ignored
    if(command.guildOnly && !message.guild) return;//now useless, will help later
    if(command.devOnly && !configs.devs.includes(message.author.id)) return message.reply(
        baseEmbed()
            .setTitle("Nope!")
            .setDescription("this command is for bot developers only")
        );//devOnly commands check
        //temp cooldown system from discordjs.guide
    if(command.cooldown) {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 0) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(
                    baseEmbed(message)
                        .setTitle("under cooldown")
                        .setDescription(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
                        );
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    
    try {
        command.run();//excute the command
    } catch(e) {
        message.reply(baseEmbed(message).setTitle("Error!").setDescription(`\`\`\`${e}\`\`\``));//send the error to the user if there is any
    };
})


//////////////
//functions
    //check if bot is mentioned and user is asking for prefix
    function fn1(message = new Discord.Message(),prefix = String()) {
        let args = getArgs(message.content);
        if(message.mentions.members.size && message.mentions.members.first() ==  client.user.id){
            if((!args[1] || args[1] == "" || args[1] == "prefix") && (!args[2] || args[2] == "")){
                let embed = baseEmbed(message)
                                .setDescription(`**My prefix is:** \`${prefix}\``)
                message.reply(embed)
                return true
            }
        }
        return false
    }

    //get args from string
    function getArgs(str = new String()) {
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