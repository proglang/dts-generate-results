var FalcorServer = require('falcor-express');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var TestRouter = <your router here>;

app.use(bodyParser.text({ type: 'text/*' }))
app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
    return new TestRouter();
}));

app.use(express.static('.'));

var server = app.listen(9090, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("navigate to http://localhost:9090")
});

