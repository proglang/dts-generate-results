var isNegatedGlob = require('is-negated-glob');

console.log(isNegatedGlob('foo'));
// { pattern: 'foo', negated: false }

console.log(isNegatedGlob('!foo'));
// { pattern: 'foo', negated: true }

console.log(isNegatedGlob('!(foo)'));
// extglob patterns are ignored
// { pattern: '!(foo)', negated: false }
