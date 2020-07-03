var commandExists = require('command-exists');

// invoked without a callback, it returns a promise
commandExists('ls')
.then(function(command){
    // proceed
}).catch(function(){
    // command doesn't exist
});
