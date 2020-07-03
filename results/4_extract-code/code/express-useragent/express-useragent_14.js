var useragent = require('express-useragent');

module.exports = function (app, express) {
    app.use(function () {
        app.use(useragent.express());
    });
};
