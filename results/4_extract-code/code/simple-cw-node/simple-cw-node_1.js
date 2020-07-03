var CW = require('simple-cw-node'),
    client = CW();

// initialize.
client.init({
    token: 'YOUR_LEGACY_TOKEN'
});

// in the case of OAuth
client.init({
    type: 'oauth',
    token: 'YOUR_OAUTH_TOKEN',
})

// get your info.
client.get('me', function (err, res) {
    console.log(res.body);
});

// create room.
client.post('rooms', {
    name: 'room',
    members_admin_ids: '123456789,987654321',
    description: 'description'
}, function (err, res) {
    console.log('created.');
});
