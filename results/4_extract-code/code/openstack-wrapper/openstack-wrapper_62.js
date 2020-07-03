//Now that we have a project specific token and the endpoint urls,
//we can instnantiate the other objects (Nova, Neutron, Glance) and call their methods

var OSWrap = require('openstack-wrapper');
var nova = new OSWrap.Nova('nova_endpoint_url', 'project_token_value');

nova.listServers(function(error, servers_array){
  if(error)
  {
    console.error('an error occured', error);
  }
  else
  {
    console.log('A list of servers have been retrived', servers_array);
    //Other objects (Glance, Neutron, Nova) and their methods follow a nearly identical pattern
  }
});
