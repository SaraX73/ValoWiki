//my own files server
    //hosted on github
let baseURL = "https://valowiki.github.io/cdn/";

let dataObject = {};

dataObject['agents'] = {};
dataObject['agents']['byNumber'] = [
    null,
    {
        "artwork": `${baseURL}agents/artwork/1.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/1.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/2.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/2.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/3.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/3.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/4.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/4.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/5.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/5.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/6.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/6.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/7.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/7.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/8.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/8.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/9.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/9.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/10.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/10.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/11.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/11.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/12.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/12.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/13.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/13.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/14.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/14.png`
    },
    {
        "artwork": `${baseURL}agents/artwork/15.png`,
        "inGameIcon": `${baseURL}agents/inGameIcon/15.png`
    }
];

let agents_by_number = dataObject['agents']['byNumber'];

dataObject['agents']['byName'] = {
    "brimstone" : agents_by_number[0],
    "phoenix"   : agents_by_number[1],
    "sage"      : agents_by_number[2],
    "sova"      : agents_by_number[3],
    "viper"     : agents_by_number[4],
    "cypher"    : agents_by_number[5],
    "reyna"     : agents_by_number[6],
    "killjoy"   : agents_by_number[7],
    "breach"    : agents_by_number[8],
    "omen"      : agents_by_number[9],
    "jett"      : agents_by_number[10],
    "raze"      : agents_by_number[11],
    "skye"      : agents_by_number[12],
    "yoru"      : agents_by_number[13],
    "astra"     : agents_by_number[14],
};

dataObject['abilities'] = {};

dataObject['abilities']['utils'] = {
    "duration": `${baseURL}abilities/utils/Duration.png`,
    "Uses_1": `${baseURL}abilities/utils/Uses_1.png`,
    "Uses_2": `${baseURL}abilities/utils/Uses_2.png`,
    "Uses_3": `${baseURL}abilities/utils/Uses_3.png`,
    "Uses_5_Astra": `${baseURL}abilities/utils/Uses_5_Astra.png`,
};

dataObject['abilities']['icons'] = {};

dataObject['abilities']['icons']['by_agent_name+hotkey'] = {

    "brimstone" : {
        "C": `${baseURL}abilities/icons/1/C.png`,
        "Q": `${baseURL}abilities/icons/1/Q.png`,
        "E": `${baseURL}abilities/icons/1/E.png`,
        "X": `${baseURL}abilities/icons/1/X.png`,
    },
    "phoenix"   : {
        "C": `${baseURL}abilities/icons/2/C.png`,
        "Q": `${baseURL}abilities/icons/2/Q.png`,
        "E": `${baseURL}abilities/icons/2/E.png`,
        "X": `${baseURL}abilities/icons/2/X.png`,
    },
    "sage"  : {
        "C": `${baseURL}abilities/icons/3/C.png`,
        "Q": `${baseURL}abilities/icons/3/Q.png`,
        "E": `${baseURL}abilities/icons/3/E.png`,
        "X": `${baseURL}abilities/icons/3/X.png`,
    },
    "sova"  : {
        "C": `${baseURL}abilities/icons/4/C.png`,
        "Q": `${baseURL}abilities/icons/4/Q.png`,
        "E": `${baseURL}abilities/icons/4/E.png`,
        "X": `${baseURL}abilities/icons/4/X.png`,
    },
    "viper" : {
        "C": `${baseURL}abilities/icons/5/C.png`,
        "Q": `${baseURL}abilities/icons/5/Q.png`,
        "E": `${baseURL}abilities/icons/5/E.png`,
        "X": `${baseURL}abilities/icons/5/X.png`,
    },
    "cypher": {
        "C": `${baseURL}abilities/icons/6/C.png`,
        "Q": `${baseURL}abilities/icons/6/Q.png`,
        "E": `${baseURL}abilities/icons/6/E.png`,
        "X": `${baseURL}abilities/icons/6/X.png`,
    },
    "reyna" : {
        "C": `${baseURL}abilities/icons/7/C.png`,
        "Q": `${baseURL}abilities/icons/7/Q.png`,
        "E": `${baseURL}abilities/icons/7/E.png`,
        "X": `${baseURL}abilities/icons/7/X.png`,
    },
    "killjoy": {
        "C": `${baseURL}abilities/icons/8/C.png`,
        "Q": `${baseURL}abilities/icons/8/Q.png`,
        "E": `${baseURL}abilities/icons/8/E.png`,
        "X": `${baseURL}abilities/icons/8/X.png`,
    },
    "breach" : {
        "C": `${baseURL}abilities/icons/9/C.png`,
        "Q": `${baseURL}abilities/icons/9/Q.png`,
        "E": `${baseURL}abilities/icons/9/E.png`,
        "X": `${baseURL}abilities/icons/9/X.png`,
    },
    "omen"  : {
        "C": `${baseURL}abilities/icons/10/C.png`,
        "Q": `${baseURL}abilities/icons/10/Q.png`,
        "E": `${baseURL}abilities/icons/10/E.png`,
        "X": `${baseURL}abilities/icons/10/X.png`,
    },
    "jett"  : {
        "C": `${baseURL}abilities/icons/11/C.png`,
        "Q": `${baseURL}abilities/icons/11/Q.png`,
        "E": `${baseURL}abilities/icons/11/E.png`,
        "X": `${baseURL}abilities/icons/11/X.png`,
    },
    "raze"  : {
        "C": `${baseURL}abilities/icons/12/C.png`,
        "Q": `${baseURL}abilities/icons/12/Q.png`,
        "E": `${baseURL}abilities/icons/12/E.png`,
        "X": `${baseURL}abilities/icons/12/X.png`,
    },
    "skye"  : {
        "C": `${baseURL}abilities/icons/13/C.png`,
        "Q": `${baseURL}abilities/icons/13/Q.png`,
        "E": `${baseURL}abilities/icons/13/E.png`,
        "X": `${baseURL}abilities/icons/13/X.png`,
    },
    "yoru"  : {
        "C": `${baseURL}abilities/icons/14/C.png`,
        "Q": `${baseURL}abilities/icons/14/Q.png`,
        "E": `${baseURL}abilities/icons/14/E.png`,
        "X": `${baseURL}abilities/icons/14/X.png`,
    },
    "astra" : {
        "C": `${baseURL}abilities/icons/15/C.png`,
        "Q": `${baseURL}abilities/icons/15/Q.png`,
        "E": `${baseURL}abilities/icons/15/E.png`,
        "X": `${baseURL}abilities/icons/15/X.png`,
        "X2": `${baseURL}abilities/icons/15/X2.png`,
    },
};

let ab_ico_by_hotkey = dataObject['abilities']['icons']['by_agent_name+hotkey'];

dataObject['abilities']['icons']['by_ability_name'] = {
    "Cloudburst": ab_ico_by_hotkey[`jett`][`C`],
    "Updraft": ab_ico_by_hotkey[`jett`][`Q`],
    "Tailwind": ab_ico_by_hotkey[`jett`][`E`],
    "Blade Storm": ab_ico_by_hotkey[`jett`][`X`],
    "Boom Bot": ab_ico_by_hotkey[`raze`][`C`],
    "Blast Pack": ab_ico_by_hotkey[`raze`][`Q`],
    "Paint Shells": ab_ico_by_hotkey[`raze`][`E`],
    "Showstopper": ab_ico_by_hotkey[`raze`][`X`],
    "Aftershock": ab_ico_by_hotkey[`breach`][`C`],
    "Flashpoint": ab_ico_by_hotkey[`breach`][`Q`],
    "Fault Line": ab_ico_by_hotkey[`breach`][`E`],
    "Rolling Thunder": ab_ico_by_hotkey[`breach`][`X`],
    "Shrouded Step": ab_ico_by_hotkey[`omen`][`C`],
    "Paranoia": ab_ico_by_hotkey[`omen`][`Q`],
    "Dark Cover": ab_ico_by_hotkey[`omen`][`E`],
    "From the Shadows": ab_ico_by_hotkey[`omen`][`X`],
    "Stim Beacon": ab_ico_by_hotkey[`brimstone`][`C`],
    "Incendiary": ab_ico_by_hotkey[`brimstone`][`Q`],
    "Sky Smoke": ab_ico_by_hotkey[`brimstone`][`E`],
    "Orbital Strike": ab_ico_by_hotkey[`brimstone`][`X`],
    "Blaze": ab_ico_by_hotkey[`phoenix`][`C`],
    "Curveball": ab_ico_by_hotkey[`phoenix`][`Q`],
    "Hot Hands": ab_ico_by_hotkey[`phoenix`][`E`],
    "Run it Back": ab_ico_by_hotkey[`phoenix`][`X`],
    "Barrier Orb": ab_ico_by_hotkey[`sage`][`C`],
    "Slow Orb": ab_ico_by_hotkey[`sage`][`Q`],
    "Healing Orb": ab_ico_by_hotkey[`sage`][`E`],
    "Resurrection": ab_ico_by_hotkey[`sage`][`X`],
    "Owl Drone": ab_ico_by_hotkey[`sova`][`C`],
    "Shock Bolt": ab_ico_by_hotkey[`sova`][`Q`],
    "Recon Bolt": ab_ico_by_hotkey[`sova`][`E`],
    "Hunter's Fury": ab_ico_by_hotkey[`sova`][`X`],
    "Snake Bite": ab_ico_by_hotkey[`viper`][`C`],
    "Poison Cloud": ab_ico_by_hotkey[`viper`][`Q`],
    "Toxic Screen": ab_ico_by_hotkey[`viper`][`E`],
    "Viper's Pit": ab_ico_by_hotkey[`viper`][`X`],
    "Trapwire": ab_ico_by_hotkey[`cypher`][`C`],
    "Cyber Cage": ab_ico_by_hotkey[`cypher`][`Q`],
    "Spycam": ab_ico_by_hotkey[`cypher`][`E`],
    "Neural Theft": ab_ico_by_hotkey[`cypher`][`X`],
    "Leer": ab_ico_by_hotkey[`reyna`][`C`],
    "Devour": ab_ico_by_hotkey[`reyna`][`Q`],
    "Dismiss": ab_ico_by_hotkey[`reyna`][`E`],
    "Empress": ab_ico_by_hotkey[`reyna`][`X`],
    "Nanoswarm": ab_ico_by_hotkey[`killjoy`][`C`],
    "Alarmbot": ab_ico_by_hotkey[`killjoy`][`Q`],
    "Turret": ab_ico_by_hotkey[`killjoy`][`E`],
    "Lockdown": ab_ico_by_hotkey[`killjoy`][`X`],
    "Regrowth": ab_ico_by_hotkey[`skye`][`C`],
    "Trailblazer": ab_ico_by_hotkey[`skye`][`Q`],
    "Guiding Light": ab_ico_by_hotkey[`skye`][`E`],
    "Seekers": ab_ico_by_hotkey[`skye`][`X`],
    "Fakeout": ab_ico_by_hotkey[`yoru`][`C`],
    "Blindside": ab_ico_by_hotkey[`yoru`][`Q`],
    "Gatecrash": ab_ico_by_hotkey[`yoru`][`E`],
    "Dimensional Drift": ab_ico_by_hotkey[`yoru`][`X`],
    "Gravity Well": ab_ico_by_hotkey[`astra`][`C`],
    "Nova Pulse": ab_ico_by_hotkey[`astra`][`Q`],
    "Nebula": ab_ico_by_hotkey[`astra`][`E`],
    "Dissipate": ab_ico_by_hotkey[`astra`][`E`],
    "Astral Form": ab_ico_by_hotkey[`astra`][`X`],
    "Cosmic Divide": ab_ico_by_hotkey[`astra`][`X2`]
};

dataObject['abilities']['icons']['by_agent_number+hotkey'] = [
    ab_ico_by_hotkey["brimstone"],
    ab_ico_by_hotkey["phoenix"],
    ab_ico_by_hotkey["sage"],
    ab_ico_by_hotkey["sova"],
    ab_ico_by_hotkey["viper"],
    ab_ico_by_hotkey["cypher"],
    ab_ico_by_hotkey["reyna"],
    ab_ico_by_hotkey["killjoy"],
    ab_ico_by_hotkey["breach"],
    ab_ico_by_hotkey["omen"],
    ab_ico_by_hotkey["jett"],
    ab_ico_by_hotkey["raze"],
    ab_ico_by_hotkey["skye"],
    ab_ico_by_hotkey["yoru"],
    ab_ico_by_hotkey["astra"]
];

dataObject['utils'] = {};

dataObject['utils']['gameIcons'] = {
    "icon_1": `${baseURL}utils/gameIcons/icon_1.png`,
    "icon_2": `${baseURL}utils/gameIcons/icon_2.png`,
    "icon_3": `${baseURL}utils/gameIcons/icon_3.png`,
    "icon_4": `${baseURL}utils/gameIcons/icon_4.png`,
    "icon_5": `${baseURL}utils/gameIcons/icon_5.png`
};

dataObject['utils']['ping'] = [
    `${baseURL}utils/ping/0.png`,
    `${baseURL}utils/ping/1.png`,
    `${baseURL}utils/ping/2.png`,
    `${baseURL}utils/ping/3.png`,
    `${baseURL}utils/ping/4.png`
];

module.exports = dataObject;