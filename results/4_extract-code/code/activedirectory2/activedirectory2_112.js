var _ = require('underscore');
var query = 'cn=*Exchange*';
var opts = {
  includeMembership : [ 'group', 'user' ], // Optionally can use 'all'
  includeDeleted : false
};

var ad = new ActiveDirectory(config);
ad.find(query, function(err, results) {
  if ((err) || (! results)) {
    console.log('ERROR: ' + JSON.stringify(err));
    return;
  }

  console.log('Groups');
  _.each(results.groups, function(group) {
    console.log('  ' + group.cn);
  });

  console.log('Users');
  _.each(results.users, function(user) {
    console.log('  ' + user.cn);
  });

  console.log('Other');
  _.each(results.other, function(other) {
    console.log('  ' + other.cn);
  });
});
