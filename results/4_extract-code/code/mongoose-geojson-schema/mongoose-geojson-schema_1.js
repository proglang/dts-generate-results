var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	any: mongoose.Schema.Types.GeoJSON,
	point: mongoose.Schema.Types.Point,
  multipoint: mongoose.Schema.Types.MultiPoint,
  linestring: mongoose.Schema.Types.LineString,
  multilinestring: mongoose.Schema.Types.MultiLineString,
  polygon: mongoose.Schema.Types.Polygon,
  multipolygon: mongoose.Schema.Types.MultiPolygon,
  geometry: mongoose.Schema.Types.Geometry,
  geometrycollection: mongoose.Schema.Types.GeometryCollection,
  feature: mongoose.Schema.Types.Feature,
  featurecollection: mongoose.Schema.Types.FeatureCollection
});

var db = mongoose.createConnection('localhost', 'test');
var model = db.model('GeoJSON', schema);

var test = new GeoJSON({
	any: {
		type: "Point",
		coordinates: [-113.806458, 44.847784]
	},
	point: {
	  type: "Point",
	  coordinates: [12.123456, 13.134578]
	},
	...
	polygon: {
		type: "Polygon",
		coordinates: [
			[
				[12.123456, 13.1345678],
				[179.999999, -1.345],
				[12.0002, -45.4663],
				[12.123456, 13.1345678]
			],
			...
	}
});

