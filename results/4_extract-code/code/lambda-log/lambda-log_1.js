const log = require('lambda-log');

exports.handler = function(event, context, callback) {
    // set some optional metadata to be included in all logs (this is an overkill example)
    log.options.meta.event = event;
    // add additional tags to all logs
    log.options.tags.push(event.env);
    
    // Log info message
    log.info('my lambda function is running!');
    //=> { _logLevel: 'info' msg: 'my lambda function is running!', event:..., _tags: ['log', 'info', ...] }
    
    if(somethingHappenedButNotFatal) {
        log.warn('something is missing, but it is OK');
        //=> { _logLevel: 'warn', msg: 'something is missing, but it is OK', event:..., _tags: ['log', 'warn', ...] }
    }
    
    // Debug messages are not generated or displayed unless enabled in the config
    log.debug('some debug message');
    //=> false
    
    // Enable debug messages
    log.options.debug = true;
    log.debug('some debug message again');
    //=> { _logLevel: 'debug', msg: 'some debug message again', event:..., _tags: ['log', 'debug', ...] }
    
    someAsyncTask(function(err, results) {
        if(err) {
            log.error(err);
            //=> { _logLevel: 'error', msg: 'Error from someAsyncTask', stack: ..., event: ..., _tags: ['log', 'error', ...]}
        } else {
            log.info('someAsyncTask completed successfully!', { results });
            //=> { _logLevel: 'info', msg: 'someAsyncTask completed successfully!', results:..., event: ..., _tags: ['log', 'info', ...]}
        }
    });
    
    // New in version 1.4.0 - assert
    someAsyncTask(function(err, results) {
        if(err) {
            log.error(err);
            //=> { _logLevel: 'error', msg: 'Error from someAsyncTask', stack: ..., event: ..., _tags: ['log', 'error', ...]}
        } else {
            // Will only log if no results are returned
            log.assert(results, 'No results returned from someAsyncTask');
        }
    });
};
