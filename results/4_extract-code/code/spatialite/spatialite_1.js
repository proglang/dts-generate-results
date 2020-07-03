var sqlite = require('spatialite');
var db = new sqlite.Database(':memory:');

var query = "SELECT AsGeoJSON(Centroid(GeomFromText('POLYGON ((30 10, 10 20, 20 40, 40 40, 30 10))'))) AS geojson;";

db.spatialite(function(err) {
  db.each(query, function(err, row) {
    console.log(row.geojson);
  });
});

