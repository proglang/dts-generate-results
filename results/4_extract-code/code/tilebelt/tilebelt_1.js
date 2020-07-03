var tilebelt = require('@mapbox/tilebelt');

var tile = [10,15,8] // x,y,z

console.log(tilebelt.tileToGeoJSON(tile));
console.log(tilebelt.getParent(tile));
