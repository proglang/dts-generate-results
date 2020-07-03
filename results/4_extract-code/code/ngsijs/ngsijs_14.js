var NGSI = require('ngsijs');
var connection = new NGSI.Connection("http://orion.example.com:1026");
connection.v2.listEntities().then((response) => {
    response.results.forEach((entity) => {
        console.log(entity.id);
    });
});
