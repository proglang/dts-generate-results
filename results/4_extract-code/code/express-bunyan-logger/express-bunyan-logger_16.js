app.use(require('express-bunyan-logger')({
    format: ":remote-address - :user-agent[major] custom logger"
});
