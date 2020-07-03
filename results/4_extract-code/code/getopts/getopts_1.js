const getopts = require("getopts")

const options = getopts(process.argv.slice(2), {
  alias: {
    w: "warp",
    t: "turbo"
  }
})
