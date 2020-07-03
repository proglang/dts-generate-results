const matchSorter = require('match-sorter')
// ES6 imports work too
// Also available in global environment via `matchSorter` global
const list = ['hi', 'hey', 'hello', 'sup', 'yo']
matchSorter(list, 'h') // ['hi', 'hey', 'hello']
matchSorter(list, 'y') // ['yo', 'hey']
matchSorter(list, 'z') // []
