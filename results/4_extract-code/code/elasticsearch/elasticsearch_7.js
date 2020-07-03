const { Client: Client6 } = require('es6')
const { Client: Client7 } = require('es7')

const client6 = new Client6({ node: 'http://localhost:9200' })
const client7 = new Client7({ node: 'http://localhost:9201' })

client6.info(console.log)
client7.info(console.log)
