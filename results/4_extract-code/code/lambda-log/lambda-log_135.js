const LambdaLog = require('lambda-log').LambdaLog;

const log = new LambdaLog({}, {
    fatal: 'error',
    poop: function(message) {
        // prepend an emoji to every message
        message.msg = '💩 ' + message.msg;
        
        return 'log';
    },
    info: function() {
        // Make `log.info()` work like `log.debug()`
        if(this.options.debug) return false;
        return 'info';
    }
});

log.poop('This is a test');
//=> "💩 This is a test"
