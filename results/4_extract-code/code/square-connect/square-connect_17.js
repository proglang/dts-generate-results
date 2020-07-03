var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN";


var api = new SquareConnect.V1EmployeesApi();

var opts = {
  order: "order_example",
  limit: 56,
  batch_token: null
}

function getAllEmployeeRoles(batch_token){
  if (batch_token) {
    api.listEmployeeRolesWithHttpInfo(opts).then(function(resp) {
       var batch_token = resp.batch_token;
       opts['batch_token'] = batch_token;
       getAllEmployeeRoles(token);
    }, function(error) {
      console.error(error);
    });
  }
}

getAllEmployeeRoles(true);
