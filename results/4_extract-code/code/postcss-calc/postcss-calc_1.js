// dependencies
var fs = require("fs")
var postcss = require("postcss")
var calc = require("postcss-calc")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(calc())
  .process(css)
  .css
