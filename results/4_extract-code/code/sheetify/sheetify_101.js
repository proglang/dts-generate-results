const css = require('sheetify')
const html = require('nanohtml')

const prefix = css`
  h1 {
    transform: translate(0, 0);
  }
`

const tree = html`
  <section class=${prefix}>
    <h1>My beautiful, centered title</h1>
  </section>
`

document.body.appendChild(tree)
