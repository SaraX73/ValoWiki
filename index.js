//load environment variables from .env file
require("dotenv").config();

//Dependency directories
const Discord = require("discord.js");
const fs = require("fs");
const cdn = require("./utils/cdn");

//classes construction
const client = new Discord.Client();

//loading commands files
let commands = new Discord.Collection();
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

//connect to discord api using bot token from .env file 
client.login(process.env['DISCORD_TOKEN']);

//client "ready" event
client.on("ready",() => console.log(client.user.tag));

//client "message" events
client.on("message",async(message) => {
    if(!message.guild || message.author.bot) return;//ignore Dm's and bots
    let prefix = configs['prefix'];//temp
    let args = getArgs(message.content);//check the function for info
    if(fn1(message,prefix)) return;//same as last one
    message.reply("I see this message")
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
    function getArgs(str = new String) {
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