const RBAC = require('rbac-a');
const JsonProvider = RBAC.providers.JsonProvider;

var rbac = new RBAC({
  provider: new JsonProvider(rulesObject)
});
