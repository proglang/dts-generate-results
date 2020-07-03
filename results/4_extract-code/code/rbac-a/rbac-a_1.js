const RBAC = require('rbac-a');
const CustomProvider = createProvider(); // extends Provider

var rbac = new RBAC({
  provider: new CustomProvider()
});


rbac.on('error', function (err) {
  console.error('Error while checking $s/%s', err.role, err.user);
  console.error(err.stack);
})

rbac.check(user, 'create').then(function (allowed) {
  if (allowed) {
    console.log('User can create!');
  } else {
    console.log('User cannot create.');
    console.info('Please contact your system admin for more information');
  }
}).catch(function (err) {
  console.error(err && err.stack || err || 'ERROR');
});

// specify attributes arguments
rbac.check(user, 'edit', { time: Date.now() }).then(function (allowed) {
  if (allowed) {
    console.log('User can edit!');
  } else {
    console.log('User cannot edit.');
    console.info('Please contact your system admin for more information');
  }
}).catch(function (err) {
  console.error(err && err.stack || err || 'ERROR');
});
