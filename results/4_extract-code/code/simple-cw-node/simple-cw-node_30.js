var CW = require('simple-cw-node'),
    client = CW(),
    Deferred = client.Deferred;

// initialize.
client.init({ token: 'YOUR_TOKEN' });

// get your info.
client
    .get('me')
    .done(function (res) {
        console.log(res.body)
    })
    .fail(function (err) {
        console.error(err);
    });
