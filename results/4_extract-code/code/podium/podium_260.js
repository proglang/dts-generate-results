const Podium = require('@hapi/podium');
const podiumObject = new Podium();

podiumObject.registerEvent('event1');

const listener1 = function(data) {

    console.log('listener1 called', data);
};

podiumObject.on({
    name: 'event1',
    count: 2
}, listener1);

podiumObject.emit('event1', 'emit 1');
podiumObject.emit('event1', 'emit 2');
podiumObject.emit('event1', 'emit 3'); // this wont call listener1
