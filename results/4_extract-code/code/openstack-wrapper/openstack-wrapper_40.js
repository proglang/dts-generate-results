//Once a generic token and a project id have been obtained (through whatever means)
//a project specific token can be generated before instantiating the other library objects

var OSWrap = require('openstack-wrapper');
var keystone = new OSWrap.Keystone('http://www.keystone.url');

keystone.getProjectToken('general_token_value', 'project_id', function(error, project_token){
  if(error)
  {
    console.error('an error occured', error);
  }
  else
  {
    console.log('A project specific token has been retrived', project_token);
    //the project token contains all kinds of project information
    //including endpoint urls for each of the various systems (Nova, Neutron, Glance)
    //and the token value (project_token.token) required for instantiating all non Keystone Objects
    //see the openstack docs for more specifics on the return format of this object (or print it out I suppose)
  }
});
