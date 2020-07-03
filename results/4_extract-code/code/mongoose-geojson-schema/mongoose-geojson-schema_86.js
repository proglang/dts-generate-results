var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	geoFeature:GeoJSON.Feature
});
