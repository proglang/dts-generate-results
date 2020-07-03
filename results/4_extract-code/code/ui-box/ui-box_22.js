'use strict'
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const {default: Box, extractStyles} = require('.')

const element = React.createElement(Box, {margin: '10px', color: 'red'}, 'hi')

const html = ReactDOMServer.renderToString(element)
const {styles, cache} = extractStyles()

const page = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page</title>
    <style>
      ${styles}
    </style>
  </head>
  <body>
    <main id="root">
      ${html}
    </main>
    <script type="application/json" id="ui-box-cache">
      ${JSON.stringify(cache)}
    </script>
  </body>
</html>
`
console.log(page)
