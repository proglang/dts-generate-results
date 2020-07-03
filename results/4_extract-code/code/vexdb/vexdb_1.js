// Get all events in StarStruck
var vexdb = require("vexdb");
vexdb.get("events", { season: "StarStruck" })
    .then(console.log)

// Get all teams from South Carolina and California whose team number is 4 digits and ends with a B
vexdb.get("teams", {
    region: ["California", "South Carolina"],
    number: /^[0-9]{4}B$/g
}).then(console.log)

// Get all combined skills scores at Worlds and CREATE U.S. Open above 200
vexdb.get("skills", {
    sku: ["RE-VRC-17-2559", "RE-VRC-17-3805"]
    type: 2,
    score: (score, run) => score > 200
}).then(console.log)

// Get 500 random teams from the United States and China
let i = 0;
vexdb.get("teams", {
    country: ["China", "United States"],
    pick: (pick, team) => Math.random() > 0 && i < 500
})

// Get all skills runs for teams that begin their name with [TVA]
vexdb.get("skills", {
    team: async (team, run) =>
        (await vexdb.size("teams", {
            team,
            name: /$\[TVA\].+/g
        })) > 0
})
