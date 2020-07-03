const requestIp = require('request-ip');
app.use(requestIp.mw())

app.use(function(req, res) {
    const ip = req.clientIp;
    res.end(ip);
});
