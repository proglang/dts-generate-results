//A simplified project object is available if the project id is already known
//it will perform both the general and project level authentications
//and return an object with nova, glance, and neutron objects ready to use

var OSWrap = require('openstack-wrapper');
OSWrap.getSimpleProject('username', 'password', 'project_id', 'keystone_url', function(error, project){
  if(error)
  {
    console.log('An error occured', error);
  }
  else
  {
    console.log('A Simple Project Object was retrieved', project);

    //to use the project object:
    project.nova.listServers(function(error, servers_array){
      if(error)
      {
        console.error('An error occured', error);
      }
      else
      {
        console.log('A list of servers was retrived', servers_array);
      }
    });
  }
});
