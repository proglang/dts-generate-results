var tress = require('tress');

// create a queue object with worker and concurrency 2
var q = tress(function(job, done){
    console.log('hello ' + job.name);
    someAsyncFunction(job, function(err, data){
        if (err) {
            done(err, 'some message');
        } else {
            done(null, 'anything');
        }
    });
}, 2);

// assign a callbacks
q.drain = function(){
    console.log('Finished');
};

q.error = function(err) {
    console.log('Job ' + this + ' failed with error ' + err);
};

q.success = function(data) {
    console.log('Job ' + this + ' successfully finished. Result is ' + data);
}

// add some items to the queue
q.push({name: 'Bob'});
q.push({name: 'Alice'});

// add some items to the queue (batch-wise)
// and specify callback only for that items (not for all queue)
q.push([{name: 'Good'}, {name: 'Bad'}, {name: 'Ugly'}], function (err) {
    console.log('finished processing item');
});

// add some items to the front of the queue
q.unshift({name: 'Cristobal Jose Junta'});

