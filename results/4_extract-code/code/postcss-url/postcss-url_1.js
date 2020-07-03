// dependencies
const fs = require("fs")
const postcss = require("postcss")
const url = require("postcss-url")

// css to be processed
const css = fs.readFileSync("input.css", "utf8")

// process css
const output = postcss()
  .use(url({
    url: "rebase"
  }))
  .process(css, {
    from: "src/stylesheet/index.css",
    to: "dist/index.css"
  })
