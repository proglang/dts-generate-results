var servicenow = require('servicenow');
var config = {
    instance: "https://demo.servicenow.com",
    username: "admin",
    password: "admin"
};
var client = new servicenow.Client(config);
client.getRecords("incident","Active=true",function(error,result) {
  if(!error) {
    // call succeded
  }
});
