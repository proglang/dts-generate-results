const Podium = require('@hapi/podium');
const podiumObject = new Podium();

podiumObject.registerEvent([
    {
        name: 'event1',
        channels: ['ch1', 'ch2', 'ch3', 'ch4'],
    },
    {
        name: 'event2',
        channels: ['ch1', 'ch2']
    }
]);
const listener1 = (data) => {

    console.log('listener1 called', data);
};
const listener2 = (data) => {

    console.log('listener2 called', data);
};

podiumObject.on({
    name: 'event1',
    channels: ['ch1']
}, listener1);

podiumObject.on({
    name: 'event1',
    channels: ['ch3', 'ch4']
}, listener2);


podiumObject.on({ name: 'event1', channels: 'ch2' }, (data) => { // autonomous function

    console.log('auto', data);
});

var arr = [0, 1, 2, 3, 4, 4, 5];

podiumObject.emit({
    name: 'event1',
    channel: 'ch3'
}, arr, function(err){

    if (err){
        console.log('callback error');
    }
    else{
        console.log('callback returned true!');
    }
});
