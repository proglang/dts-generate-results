var each = require('each');
each( [{id: 1}, {id: 2}, {id: 3}] )
.parallel( 4 )
.call(function(element, index, next) {
  console.log('element: ', element, '@', index);
  setTimeout(next, 500);
})
.next(function(err){
  console.log(err ? err.message : 'success');
});
