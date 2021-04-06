//my own files server
    //hosted on github
let baseURL = "https://valowiki.github.io/cdn/";

let obj = {};

obj['agents'] = {};
obj['agents']['byNumber'] = [
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

let a = obj['agents']['byNumber'];

obj['agents']['byName'] = {
    "brimstone" : a[0],
    "phoenix"   : a[1],
    "sage"      : a[2],
    "sova"      : a[3],
    "viper"     : a[4],
    "cypher"    : a[5],
    "reyna"     : a[6],
    "killjoy"   : a[7],
    "breach"    : a[8],
    "omen"      : a[9],
    "jett"      : a[10],
    "raze"      : a[11],
    "skye"      : a[12],
    "yoru"      : a[13],
    "astra"     : a[14],
};

obj['abilities'] = {};

obj['abilities']['utils'] = {
    "duration": `${baseURL}abilities/utils/Duration.png`,
    "Uses_1": `${baseURL}abilities/utils/Uses_1.png`,
    "Uses_2": `${baseURL}abilities/utils/Uses_2.png`,
    "Uses_3": `${baseURL}abilities/utils/Uses_3.png`,
    "Uses_5_Astra": `${baseURL}abilities/utils/Uses_5_Astra.png`,
}

obj['abilities']['icons'] = {};

obj['abilities']['icons']['by_agent_name+hotkey'] = {

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

let aa = obj['abilities']['icons']['by_agent_name+hotkey'];

obj['abilities']['icons']['by_ability_name'] = {
    "Cloudburst": aa[`jett`][`C`],
    "Updraft": aa[`jett`][`Q`],
    "Tailwind": aa[`jett`][`E`],
    "Blade Storm": aa[`jett`][`X`],
    "Boom Bot": aa[`raze`][`C`],
    "Blast Pack": aa[`raze`][`Q`],
    "Paint Shells": aa[`raze`][`E`],
    "Showstopper": aa[`raze`][`X`],
    "Aftershock": aa[`breach`][`C`],
    "Flashpoint": aa[`breach`][`Q`],
    "Fault Line": aa[`breach`][`E`],
    "Rolling Thunder": aa[`breach`][`X`],
    "Shrouded Step": aa[`omen`][`C`],
    "Paranoia": aa[`omen`][`Q`],
    "Dark Cover": aa[`omen`][`E`],
    "From the Shadows": aa[`omen`][`X`],
    "Stim Beacon": aa[`brimstone`][`C`],
    "Incendiary": aa[`brimstone`][`Q`],
    "Sky Smoke": aa[`brimstone`][`E`],
    "Orbital Strike": aa[`brimstone`][`X`],
    "Blaze": aa[`phoenix`][`C`],
    "Curveball": aa[`phoenix`][`Q`],
    "Hot Hands": aa[`phoenix`][`E`],
    "Run it Back": aa[`phoenix`][`X`],
    "Barrier Orb": aa[`sage`][`C`],
    "Slow Orb": aa[`sage`][`Q`],
    "Healing Orb": aa[`sage`][`E`],
    "Resurrection": aa[`sage`][`X`],
    "Owl Drone": aa[`sova`][`C`],
    "Shock Bolt": aa[`sova`][`Q`],
    "Recon Bolt": aa[`sova`][`E`],
    "Hunter's Fury": aa[`sova`][`X`],
    "Snake Bite": aa[`viper`][`C`],
    "Poison Cloud": aa[`viper`][`Q`],
    "Toxic Screen": aa[`viper`][`E`],
    "Viper's Pit": aa[`viper`][`X`],
    "Trapwire": aa[`cypher`][`C`],
    "Cyber Cage": aa[`cypher`][`Q`],
    "Spycam": aa[`cypher`][`E`],
    "Neural Theft": aa[`cypher`][`X`],
    "Leer": aa[`reyna`][`C`],
    "Devour": aa[`reyna`][`Q`],
    "Dismiss": aa[`reyna`][`E`],
    "Empress": aa[`reyna`][`X`],
    "Nanoswarm": aa[`killjoy`][`C`],
    "Alarmbot": aa[`killjoy`][`Q`],
    "Turret": aa[`killjoy`][`E`],
    "Lockdown": aa[`killjoy`][`X`],
    "Regrowth": aa[`skye`][`C`],
    "Trailblazer": aa[`skye`][`Q`],
    "Guiding Light": aa[`skye`][`E`],
    "Seekers": aa[`skye`][`X`],
    "Fakeout": aa[`yoru`][`C`],
    "Blindside": aa[`yoru`][`Q`],
    "Gatecrash": aa[`yoru`][`E`],
    "Dimensional Drift": aa[`yoru`][`X`],
    "Gravity Well": aa[`astra`][`C`],
    "Nova Pulse": aa[`astra`][`Q`],
    "Nebula": aa[`astra`][`E`],
    "Dissipate": aa[`astra`][`E`],
    "Astral Form": aa[`astra`][`X`],
    "Cosmic Divide": aa[`astra`][`X2`]
}

obj['abilities']['icons']['by_agent_number+hotkey'] = [
    aa["brimstone"],
    aa["phoenix"],
    aa["sage"],
    aa["sova"],
    aa["viper"],
    aa["cypher"],
    aa["reyna"],
    aa["killjoy"],
    aa["breach"],
    aa["omen"],
    aa["jett"],
    aa["raze"],
    aa["skye"],
    aa["yoru"],
    aa["astra"]
]

module.exports = obj;