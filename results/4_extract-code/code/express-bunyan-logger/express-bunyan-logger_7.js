app.use(require('express-bunyan-logger')({
    name: 'logger',
    streams: [{
        level: 'info',
        stream: process.stdout
    }]
}));
