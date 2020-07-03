//Once a general authentication token value has been obtained
//a project id needs to be found before authenicating to that project
//obviously this listing step can be skipped if one already knows the id

var OSWrap = require('openstack-wrapper');
var keystone = new OSWrap.Keystone('http://www.keystone.url');

keystone.listProjects('username', 'general_token_value', function(error, projects_array)){
  if(error)
  {
    console.error('an error occured', error);
  }
  else
  {
    console.log('A list of projects was retrived', projects_array);
    //projects_array[n].id is required for many other calls and to generate a project specific token
  }
});
