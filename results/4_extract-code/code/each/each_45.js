var each = require('each');
each( [{id: 1}, {id: 2}, {id: 3}] )
.parallel( true )
.call(function(element, index, next) {
  setTimeout(next, 500);
})
.error(function(err, errors){
  console.log(err.message);
  errors.forEach(function(error){
    console.log('  '+error.message);
  });
})
.next(function(){
  console.log('Done');
});
