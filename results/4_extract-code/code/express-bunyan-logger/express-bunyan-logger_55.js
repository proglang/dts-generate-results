// suppose connect-requestid middleware is already added.
app.use(require('express-bunyan-logger')({
    genReqId: function(req) {
       return req.id;
    }
});
