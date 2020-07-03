const { install, update, uninstall } = require("./commands")

const options = getopts(process.argv.slice(2), {
  stopEarly: true
})
const [command, subargs] = options._

if (command === "install") {
  install(subargs)
} else if (command === "update") {
  update(subargs)
} else if (command === "uninstall") {
  uninstall(subargs)
}
