//Before any other calls are made into the Openstack system,
//the user must do a general authentication

var OSWrap = require('openstack-wrapper');
var keystone = new OSWrap.Keystone('http://www.keystone.url');

keystone.getToken('username', 'password', function(error, token){
  if(error)
  {
    console.error('an error occured', error);
  }
  else
  {
    console.log('A general token object has been retrived', token);
    //the token value (token.token) is required for project listing & getting project specific tokens
  }
});
