const Discord = require("discord.js");


module.exports = {
    usage: "<command name>",
    description: "show all available commands / show specific command info",
    cooldown: 10,
    run: async(message = new Discord.Message(),args) => {
        //load client
        let client = message.client;

        //get commands list from client
        let commands = client.commands.filter(c => !c.ignored);

        //convert commands to array
        let cmdsArray = commands.array();

        //load cdn
        let cdn = client.cdn;

        //load base bot embed
        let embed = client.baseEmbed(message);

        //load prefix for that server
        let prefix = client.getPrefix(message.guild);

        //set embed thumbnail
        embed.setThumbnail(cdn['utils']['help']['help2']);

        //if there is no specific command
        if(!args[0] || args[0] == "") {
            //create variable to add command-list in it as string(later: set is as embed description)
            let descriptionString = "";

            //loop on the commands to add them to the embed
            for(let cmd of cmdsArray) {
                descriptionString += `**${prefix}${cmd.name}${cmd.usage ? ` ${cmd.usage}` : ""}**${cmd.description ? `\n\`${cmd.description}\`` : ""}\n`;
            };

            //set embed title
            embed.setTitle("Commands List:");

            //set embed description
            embed.setDescription(descriptionString);

            //send the embed to the user
            message.channel.send(embed);

        //else: if there is specific command
        } else {
            //get the targeted command name
            let targetedCommandName = args[0] || "";

            //try to load command data
            let cmdData = commands.get(targetedCommandName) || commands.find(c => c.aliases && c.aliases.includes(targetedCommandName));

            //if there is any command data found
            if(cmdData && cmdData.name) {

                //set embed title
                embed.setTitle(`${cmdData.name} command info:`)

                //if there is command useage
                if(cmdData.usage) {
                    embed.addField("Usage:",`**${prefix}${cmdData.name} ${cmdData.usage}**`,client.configs.help_inline)
                }

                //if there is command description
                if(cmdData.description) {
                    embed.addField("Description:",`**${cmdData.description}**`,client.configs.help_inline)
                }

                //if there is command aliases
                if(cmdData.aliases) {
                    embed.addField("Aliases:",`**\`${cmdData.aliases.join("\`,\`")}\`**`,client.configs.help_inline)
                }

                //if the command is limited
                if(cmdData.guildOnly || cmdData.devOnly) {
                    embed.addField("limited:",`**${cmdData.guildOnly ? `\`guild only\`` : ''}${cmdData.guildOnly && cmdData.devOnly ? " , " : ""}${cmdData.devOnly ? `\`developer only\`` : ''}**`,client.configs.help_inline)
                }

                //if there is command cooldown
                if(cmdData.cooldown) {
                    embed.addField("Cooldown:",`**\`${cmdData.cooldown}\`second(s)**`,client.configs.help_inline)
                }

                //if there is command required permissions
                if(cmdData.permissions) {
                    embed.addField("permissions:",`**\`${typeof cmdData.permissions == "string" ? cmdData.permissions.toLowerCase().split("_").join(" ") : cmdData.permissions.map(p => p.toLowerCase().split("_").join(" ")).join(`\` , \``)}\`**`,client.configs.help_inline)
                }

                //send the embed to the user
                message.channel.send(embed)

            //else: if there is not command data found
            } else {
                //set embed titel 
                embed.setTitle("Sorry!")

                //set embed description
                embed.setDescription(`the command \`${targetedCommandName}\` **Not found**`)

                //set embed thumbnail
                embed.setThumbnail(cdn['utils']['errors']['warn'])

                //send the embed to the user
                message.channel.send(embed)
            }
        }

    }
}