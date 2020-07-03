var each = require('each');
each( [{id: 1}, {id: 2}, {id: 3}] )
.call( function(element, index, next){
  setImmediate(next);
})
.next( function(err){
  console.log(err ? err.message : 'success');
})
