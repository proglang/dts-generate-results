const options = {
  user: 'foo', //env var: PGUSER
  database: 'my_db', //env var: PGDATABASE
  password: 'secret', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432 //env var: PGPORT
}
const pgEars = require('pg-ears')(options)
pgEars.listen('mychannel', (err, data) => {
  if (err) return console.error(err)
  console.log(data)
})
pgEars.notify('mychannel', {key: 'value'}, (err) => {
  if (err) console.error(err)
})
