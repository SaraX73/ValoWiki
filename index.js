//load environment variables from .env file
require("dotenv").config()

//Dependency directories
const Discord = require("discord.js")

//classes construction
const client = new Discord.Client()

//connect to discord api using bot token from .env file 
client.login(process.env['DISCORD_TOKEN'])

//client "ready" event
client.on("ready",() => console.log(client.user.tag))