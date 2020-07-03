const knex = require('knex');
const knexPostgis = require('knex-postgis');

const db = knex({
  dialect: 'postgres'
});

knexPostgis(db);

db.postgisDefineExtras((knex, formatter) => ({
  utmzone(geom) {
    return knex.raw('utmzone(?)', [formatter.wrapWKT(geom)]);
  }
}));
//now you can use st.utmzone function in the same way as predefined functions
