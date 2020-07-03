const Graph = require('node-dijkstra')

const route = new Graph()

route.addNode('A', { B:1 })
route.addNode('B', { A:1, C:2, D: 4 })
route.addNode('C', { B:2, D:1 })
route.addNode('D', { C:1, B:4 })

route.path('A', 'D') // => [ 'A', 'B', 'C', 'D' ]
