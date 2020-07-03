var checker = require('license-checker');

checker.init({
    start: '/path/to/start/looking'
}, function(err, packages) {
    if (err) {
        //Handle error
    } else {
        //The sorted package data
        //as an Object
    }
});
