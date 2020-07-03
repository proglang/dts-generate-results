var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;

var poolConfig = {
    min: 2,
    max: 4,
    log: true
};

var connectionConfig = {
    userName: 'login',
    password: 'password',
    server: 'localhost'
};

//create the pool
var pool = new ConnectionPool(poolConfig, connectionConfig);

pool.on('error', function(err) {
    console.error(err);
});

//acquire a connection
pool.acquire(function (err, connection) {
    if (err) {
        console.error(err);
        return;
    }

    //use the connection as normal
    var request = new Request('select 42', function(err, rowCount) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('rowCount: ' + rowCount);

        //release the connection back to the pool when finished
        connection.release();
    });

    request.on('row', function(columns) {
        console.log('value: ' + columns[0].value);
    });

    connection.execSql(request);
});
