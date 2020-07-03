// In a file named something like bookshelf.js
var knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);

// elsewhere, to use the bookshelf client:
var bookshelf = require('./bookshelf');

var Post = bookshelf.Model.extend({
  // ...
});
