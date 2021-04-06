//load environment variables from .env file
require("dotenv").config();

//Dependency directories
const Discord = require("discord.js");
const fs = require("fs");
const cdn = require("./utils/cdn")

//classes construction
const client = new Discord.Client();

//loading commands files
let commands = new Discord.Collection()
const commandsFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"))
for(let file of commandsFiles){
    try {
        let cmd = require(`./commands/${file}`)
        cmd.name = file.slice(0,file.length - 3)
        commands.set(cmd.name,cmd)
    } catch (e) {
        console.error(`Error: command load failed (${file}) -> ${e}`)
    }
}

//load configs.json file
const configs = require("./configs.json")

//build in client
client.commands = commands
client.configs = configs
client.cdn = cdn

//connect to discord api using bot token from .env file 
client.login(process.env['DISCORD_TOKEN']);

//client "ready" event
client.on("ready",() => console.log(client.user.tag));

//client "message" events
client.on("message",async(message) => {
    let args = getArgs(message.content);

})


//////////////
//functions
    //check if bot is mentioned and user is asking for prefix
    function fn1(message = new Discord.Message()) {
        let args = getArgs(message.content);
        if(args && args[0] && args[0] == `<@${client.user.id}>`){
            if(!args[1] || !args[2]){
                let embed = new Discord.MessageEmbed()
                                    .setColor
                                    .set
                message.reply(new Discord.MessageEmbed())
            }
        }
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
                        .setImage()
    }