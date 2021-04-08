const Discord = require("discord.js");

module.exports = {
    description: "diplay bot ping",
    cooldown: 60,
    run: async(message = new Discord.Message(),args) => {
        //send message
        const botMsg = await message.channel.send("Pinging...")

        //calculate latency
        const latency = botMsg.createdTimestamp - message.createdTimestamp;

        //get api ping
        const api = Math.round(message.client.ws.ping);

        //get average ping
        const averagePing = (api + latency) / 2;

        //load ping icons from cdn
        let icons = message.client.cdn['utils']['ping'];

        //create iconUrl variable to edit it later
        let iconUrl = "";

        //edit iconUrl value (based on average ping)
            //-50ms: 4 wave(s)
            if(averagePing <= 50) iconUrl = icons[4];
            //51-100ms: 3 wave(s)
            if(averagePing > 50 && averagePing <= 100) iconUrl = icons[3];
            //101-300ms: 2 wave(s)
            if(averagePing > 100 && averagePing <= 300) iconUrl = icons[2];
            //301-1000ms: 1 wave(s)
            if(averagePing > 300 && averagePing <= 1000) iconUrl = icons[1];
            //+1000ms: 0 wave(s)
            if(averagePing > 1000) iconUrl = icons[0];
        
        //load base bot embed
        let embed = message.client.baseEmbed(message);
        
        //set embed "Thumbnail" to the ping icon
        embed.setThumbnail(iconUrl);

        //set embed title
        embed.setTitle(`Pong! 🏓`)

        //set embed fields
        embed.addFields(
            { name: '⌛', value: `latency is **${latency}ms**` },
            { name: '🌐', value: `API ping is **${api}ms**`}
        )

        //edit the message sent by bot to the new embed
        botMsg.edit(embed)
    }
}