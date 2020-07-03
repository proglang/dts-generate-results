require('mssql').connect(...config, beforeConnect: conn => {
  conn.once('connect', err => { err ? console.error(err) : console.log('mssql connected')})
  conn.once('end', err => { err ? console.error(err) : console.log('mssql disconnected')})
}})
