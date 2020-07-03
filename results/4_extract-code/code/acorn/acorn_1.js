const {Parser} = require("acorn")

const MyParser = Parser.extend(
  require("acorn-jsx")(),
  require("acorn-bigint")
)
console.log(MyParser.parse("// Some bigint + JSX code"))
