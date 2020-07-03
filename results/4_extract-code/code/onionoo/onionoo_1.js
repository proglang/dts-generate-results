const Onionoo = require('onionoo');
const onionoo = new Onionoo();

// Get top 10 relays
const query = {
  limit: 10,
  running: true,
  order: '-consensus_weight'
};

onionoo.summary(query).then(response => {
    console.log(response.body)
    // {
    //   version:'3.1',
    //   relays_published:'2016-12-23 09:00:00',
    //   relays:[
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object],
    //     [Object]
    //   ],
    //   bridges_published:'2016-12-23 07:41:03',
    //   bridges:[]
    // }
});
