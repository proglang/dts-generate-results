import NamedRegExp from 'named-regexp-groups'
//or
const NamedRegExp = require('named-regexp-groups')

// as string
var r = new NamedRegExp('(?<foo>foo)(?<bar>)(-)(?:wat)(?<na>(?:na)+)(?&na)')
// or as regex
var r = new NamedRegExp(/(:<foo>foo)(:<bar>)(-)(?:wat)(:<na>(?:na)+)(:&na)/)

r.source
// => r.source === '(foo)([^]+)(-)(?:wat)((?:na)+)((?:na)+)'
