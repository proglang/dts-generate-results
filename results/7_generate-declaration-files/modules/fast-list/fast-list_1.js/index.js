var FastList = require("fast-list")
var list = new FastList()
list.push("foo")
list.unshift("bar")
list.push("baz")
console.log(list.length) // 2
console.log(list.pop()) // baz
console.log(list.shift()) // bar
console.log(list.shift()) // foo
