const sql = require('mssql')

sql.on('error', err => {
    // ... error handler
})

sql.connect(config).then(pool => {
    
    // Stored procedure
    
    return pool.request()
        .input('input_parameter', sql.Int, value)
        .output('output_parameter', sql.VarChar(50))
        .execute('procedure_name')
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
})
