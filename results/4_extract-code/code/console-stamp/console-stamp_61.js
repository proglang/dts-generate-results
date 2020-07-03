const moment = require('moment');
moment.locale('ja');

require('console-stamp')(console, {
    formatter: function() {
        return moment().format('LLLL');
    }
});

console.log('This is a console.log message');
console.info('This is a console.info message');
console.warn('This is a console.warn message');
console.error('This is a console.error message');
console.dir({bar: 'This is a console.dir message'});
