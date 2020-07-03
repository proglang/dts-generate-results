const Podium = require('@hapi/podium');
const podiumObject = new Podium();

podiumObject.registerEvent([
    {
        name: 'event1',
        channels: ['ch1', 'ch2'],
        clone: true
    },
    {
        name: 'event2',
        channels: ['ch1', 'ch2']
    }
]);

const listener1 = (data) => {

    data[0] = 55;
    console.log('listener1 called', data);
};
const listener2 = (data) => {

    data[0] = 100;
    console.log('listener2 called', data);
};

podiumObject.on({
    name: 'event1',
    channels: ['ch1']
}, listener1);

podiumObject.on({
    name: 'event2',
    channels: ['ch1']
}, listener2);

var arr = [0, 1, 2, 3, 4, 4, 5];

console.log('initially: ', arr);

podiumObject.emit({
    name: 'event1',
    channel: 'ch1'
}, arr, function(err){

    if (err){
        console.log('callback 1 error');
    }
    else {
        console.log('callback 1 returned true!');
    }
});

console.log('after event1, ch1: ', arr);

podiumObject.emit({
    name: 'event2',
    channel: 'ch1'
}, arr, function(err){

    if (err){
        console.log('callback 2 error');
    }
    else {
        console.log('callback 2 returned true!');
    }
});

console.log('after event2, ch1: ', arr);
