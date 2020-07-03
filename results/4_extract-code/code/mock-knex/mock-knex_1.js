var knex = require('knex');
var mockDb = require('mock-knex');
var db = knex({
    client: 'sqlite',
});

mockDb.mock(db);

... run tests ...
