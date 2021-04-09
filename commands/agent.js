module.exports = {
    aliases: ["ag"],
    usage: "[*name/number]",
    description: "get some info about a VALORANT agent.",
    cooldown: 10,
    run: async(message,args) => {
        //if there isn't any agent name/number submited
        if(!args || !args[0] ||args[0] == ""){

            //run command "${prefix}help agent"
            message.client.commands.get("help").run(message,["agent"]);

            //stop the code
            return;
        }

        //load cdn
        let cdn = message.client.cdn;

        //put the required agent name/number into a variable
        let rAgent = args[0].split("").map((l,n) => `${n == 0 ? l.toUpperCase() : l.toLowerCase()}`).join("");

        //if the given value is a number
        if(!isNaN(Number(rAgent))) {

            //put the given number into a variable
            let num = Number(rAgent);

            //load agents by-number data
            let agents = message.client.metadata.en.agents.byNumber;//no muti-language support yet

            //check if that agent is exist
            if(agents[num] && agents[num].inGameName){
                //get agent info discord embed
                let embed = getAgentEmbed(agents[num],message);

                //send the embed to the user and stop the code
                return message.channel.send(embed)
            }
            //else: try find by agent name
        } else {
            //load agents by-name data
            let agents = message.client.metadata.en.agents.byName;//no muti-language support yet

            //check if that agent is exist
            if(agents[rAgent] && agents[rAgent].inGameName){
                //get agent info discord embed
                let embed = getAgentEmbed(agents[rAgent],message);

                //send the embed to the user and stop the code
                return message.channel.send(embed)
            }
        }
            //if the code not stopped yet
                //create embed 
                let embed = message.client.baseEmbed(message);

                //set embed thumbnail
                embed.setThumbnail(cdn['utils']['errors']['info']);

                //set embed title
                embed.setTitle("Sorry!")

                //set embed description
                embed.setDescription(`Agent you're looking for seems not exist in our databases`);

                //send the embed to the user
                message.channel.send(embed)
    }
}

//functions
    //get `${country-flag} ${country-name}` by country name
    function getCountry(cName,emojis){
        //make a empty string variable (later: put flag icon in)
        let flag = "";

        //chacge "flag" value(based on country name)
        switch(cName) {//note: that's discord emojis codes ok ? 
            case "United States": flag = ":flag_us:";break;
            case "United Kingdom": flag = ":flag_gb:";break;
            case "China": flag = ":flag_cn:";break;
            case "Russia": flag = ":flag_ru:";break;
            case "Morocco": flag = ":flag_ma:";break;
            case "Mexico": flag = ":flag_mx:";break;
            case "Germany": flag = ":flag_de:";break;
            case "Sweden": flag = ":flag_se:";break;
            case "South Korea": flag = ":flag_kr:";break;
            case "Brazil": flag = ":flag_br:";break;
            case "Australia": flag = ":flag_au:";break;
            case "Japan": flag = ":flag_jp:";break;
            case "Ghana": flag = ":flag_gh:";break;
            case null: flag = `${emojis.Unknown}`;cName = "Unknown";break;//custom code for "omen"
        };

        //return  flag + country name
        return `${flag ? `${flag} ` : ''}${cName}`;
    };

    //get `${emoji} ${role}` from ${role}
    function getRole(role,emojis){
        //get role emoji
        let emote = emojis[role];

        //return emoji + role name
        return `${emote} ${role}`;
    }

    //get embed based on gived agent data
    function getAgentEmbed(agentData,message){

        //load cdn from client
        let cdn = message.client.cdn;

        //make new embed (bot base embed)
        let embed = message.client.baseEmbed(message);

        //get emojis data-pack
        let emojis = message.client.customEmojis;

        //excute things from the given data
        let {
            inGameName,     origin,
            biography,      role,
            abilities
        } = agentData;

        //get agent images
        let images = cdn['agents']['byName'][inGameName.toLowerCase()];

        //set embed title
        embed.setTitle(`${inGameName} - ${getRole(role,emojis)}`);

        //create new variable (description)
        let des = "";

        //add country to the description
        des += `**Country:**\n${getCountry(origin,emojis)}\n\n`;

        //create a new variable (later: put processed abilities string in)
        let abStr = "";//ab = abilities; str = string;

        //process the abilities
            //loop on them one-by-one
            for(let [key,value] of Object.entries(abilities)){

                //create a variable to put ability  type in (if exist)
                let type = "";

                //check ability hotkey
                switch(key){
                    case "E": type = "Signature";break;
                    case "X": type = "Ultimate";break;
                    case "X2": type = "Ultimate";break;
                };

                //add ability data to "abStr" variable
                abStr += `\n**${key/*hotkey*/}** - ${value/*ability name*/}${type ? ` - **${type}**` : ''/*ability type(if exist)*/}`;
            };

        //add abilities to des
        des += `**Abilities:**${abStr}\n`;

        //add biography to des
        des += `\n**Biography:**\n${biography}`;

        //set Embed description
        embed.setDescription(des);

        //set embed Thumbnail (in game icon)
        embed.setThumbnail(images.inGameIcon)

        //set embed image (art work)
        embed.setImage(images.artwork)

        //return the embed
        return embed;
    };