const sql = require('mssql')

sql.on('error', err => {
    // ... error handler
})

sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
        .input('input_parameter', sql.Int, value)
        .query('select * from mytable where id = @input_parameter')
}).then(result => {
    console.dir(result)
}).catch(err => {
  // ... error checks
});
