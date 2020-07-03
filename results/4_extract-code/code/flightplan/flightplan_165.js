plan.target('dynamic-hosts', function(done, runtime) {
  var AWS = require('aws-sdk');
  AWS.config.update({accessKeyId: '...', secretAccessKey: '...'});
  var ec2 = new AWS.EC2();
  var params = {Filters: [{Name: 'instance-state-name', Values: ['running']}]};
  ec2.describeInstances(params, function(err, response) {
    if(err) {
      return done(err);
    }
    var hosts = [];
    response.data.Reservations.forEach(function(reservation) {
      reservation.Instances.forEach(function(instance) {
        hosts.push({
          host: instance.PublicIpAddress,
          username: 'pstadler',
          agent: process.env.SSH_AUTH_SOCK
        });
      });
    });
    done(hosts);
  });
});
