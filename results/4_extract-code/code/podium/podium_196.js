const Podium = require('@hapi/podium');
const podiumObject = new Podium();

podiumObject.registerEvent([
    {
        name: 'event1',
        channels: ['ch1', 'ch2'],
    }
]);
podiumObject.registerEvent([
    {
        name: 'event1',
        channels: ['ch1', 'ch2'],
        shared: true
    }
]);
const listener2 = (data) => {

    console.log('listener2 called', data);
};

podiumObject.on({
    name: 'event1',
    channels: ['ch1']
}, listener2);

var arr = [0, 1, 2, 3, 4, 4, 5];

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
