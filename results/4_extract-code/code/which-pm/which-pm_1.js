'use strict'
const whichpm = require('which-pm')

whichpm(process.cwd())
    .then(pm => console.log(pm))
    .catch(err => console.error(err))
//> {name: "pnpm", version: "0.64.2"}
