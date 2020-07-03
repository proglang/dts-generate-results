const knex = require('knex');
const knexPostgis = require('knex-postgis');

const db = knex({
  dialect: 'postgres'
});

// install postgis functions in knex.postgis;
const st = knexPostgis(db);
/* or:
 * knexPostgis(db);
 * const st = db.postgis;
 */

// insert a point
const sql1 = db.insert({
  id: 1,
  geom: st.geomFromText('Point(0 0)', 4326)
}).into('points').toString();
console.log(sql1);
// insert into "points" ("geom", "id") values (ST_geomFromText('Point(0 0)'), '1')

// find all points return point in wkt format
const sql2 = db.select('id', st.asText('geom')).from('points').toString();
console.log(sql2);
// select "id", ST_asText("geom") as "geom" from "points"

// all methods support alias
const sql3 = db.select('id', st.asText(st.centroid('geom')).as('centroid')).from('geometries').toString();
console.log(sql3);
// select "id", ST_asText(ST_centroid("geom")) as "centroid" from "geometries"

