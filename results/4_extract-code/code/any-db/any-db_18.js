var begin = require('any-db-transaction')

var tx = begin(conn)              // Can also take a callback
tx.on('error', function (err) {}) // Emitted for unhandled query errors
tx.query(...)                     // same interface as connections, plus...
tx.rollback()                     // this too
tx.commit()                       // takes an optional callback for errors
