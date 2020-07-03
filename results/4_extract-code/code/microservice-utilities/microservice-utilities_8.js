const Api = require('openapi-factory');
const { Authorizer, RequestLogger } = require('microservice-utilities');
const configuration = { jwkKeyListUrl: 'https://example.com/.well-known/jwks.json' };

let requestLogger = new RequestLogger();
let authorizer = new Authorizer(msg => requestLogger.log(msg), configuration);
let api = new Api();

api.setAuthorizer(async request => {
  return await authorizer.getPolicy(request);
});

api.get('/v1/item', async request => {
  // JWT added by authorizer
  let jwt = request.requestContext.authorizer.jwt;

  // JWT included in the request will be automatically truncated by the RequestLogger
  requestLogger.log({ title: 'GET /v1/item', level: 'INFO', request: request });
});
