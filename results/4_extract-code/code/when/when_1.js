var rest = require('rest');

fetchRemoteGreeting()
    .then(addExclamation)
    .catch(handleError)
    .done(function(greeting) {
        console.log(greeting);
    });

function fetchRemoteGreeting() {
    // convert native Promise to a when.js promise for 'hello world'
    var result = rest('http://example.com/greeting');
    return when(result)
}

function addExclamation(greeting) {
    return greeting + '!!!!'
}

function handleError(e) {
    return 'drat!';
}
