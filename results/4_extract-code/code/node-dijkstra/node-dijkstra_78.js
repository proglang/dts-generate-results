const Graph = require('node-dijkstra')

const route = new Graph()

route.addNode('A', { B: 1 })
route.addNode('B', { A: 1, C: 2, D: 4 })
route.addNode('C', { B: 2, D: 1 })
route.addNode('D', { C: 1, B: 4 })

route.path('A', 'D') // => ['A', 'B', 'C', 'D']

// trimmed
route.path('A', 'D', { trim: true }) // => [B', 'C']

// reversed
route.path('A', 'D', { reverse: true }) // => ['D', 'C', 'B', 'A']

// include the cost
route.path('A', 'D', { cost: true })
// => {
//       path: [ 'A', 'B', 'C', 'D' ],
//       cost: 4
//    }
