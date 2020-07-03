// Pseudo code
let db = require('mongoose').createConnection('mongodb://localhost/forum');

function lastPosts(limit) {
  return db.model('Post').find().limit(limit).orderBy('-_id').lean(true).exec(); // <- Promise
}

let cachedLastPosts = require('promise-memoize')(lastPosts, { maxAge: 60000 });

// Later...
cachedLastPosts(10).then(posts => console.log(posts));
