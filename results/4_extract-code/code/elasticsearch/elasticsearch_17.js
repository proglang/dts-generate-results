const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

// promise API
const result = await client.search({
  index: 'my-index',
  body: { foo: 'bar' }
})

// callback API
client.search({
  index: 'my-index',
  body: { foo: 'bar' }
}, (err, result) => {
  if (err) console.log(err)
})
