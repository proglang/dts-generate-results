var polygonsIntersect = require('polygons-intersect');
var poly1 = [{x: 10, y: 10}, {x: 10, y: 30}, {x: 30, y: 30}, {x: 30, y: 10}];
var poly2 = [{x: 20, y: 20}, {x: 20, y: 40}, {x: 40, y: 40}, {x: 40, y: 20}];
console.log(polygonsIntersect(poly1, poly2));
