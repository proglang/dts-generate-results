var sqlanywhere = require('sqlanywhere');

var conn = sqlanywhere.createConnection();

var conn_params = {
  Server  : 'demo16',
  UserId  : 'DBA',
  Password: 'sql'
};


conn.connect(conn_params, function(err) {
  if (err) throw err;
  conn.exec('SELECT Name, Description FROM Products WHERE id = ?', [301], function (err, result) {
    if (err) throw err;

    console.log('Name: ', result[0].Name, ', Description: ', result[0].Description);
    // output --> Name: Tee Shirt, Description: V-neck
    conn.disconnect();
  })
});
