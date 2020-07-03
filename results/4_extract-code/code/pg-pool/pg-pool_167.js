const Pool = require('pg-pool')
const pool = new Pool()

var count = 0

pool.on('connect', client => {
  client.count = count++
})

pool
  .connect()
  .then(client => {
    return client
      .query('SELECT $1::int AS "clientCount"', [client.count])
      .then(res => console.log(res.rows[0].clientCount)) // outputs 0
      .then(() => client)
  })
  .then(client => client.release())

