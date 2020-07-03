const moo = require('moo')

const lexer = moo.compile({
  ws: /[ \t]+/,
  string: {match: /"(?:\\["\\]|[^\n"\\])*"/, value: s => s.slice(1, -1)},
})

lexer.reset('"test"')
lexer.next() /* { value: 'test', text: '"test"', ... } */
