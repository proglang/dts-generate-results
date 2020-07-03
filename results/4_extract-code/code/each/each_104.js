var each = require('each');
each( {id_1: 1, id_2: 2, id_3: 3} )
.call(function(key, value, next) {
  console.log('key: ', key);
  console.log('value: ', value);
  setTimeout(next, 500);
})
.next(function(err) {
  console.log(err ? err.message : 'success');
});
