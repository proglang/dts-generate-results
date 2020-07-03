const { PlatformClient, RequestLogger } = require('microservice-utilities');

let requestLogger = new RequestLogger();
let tokenResolver = () => "exampleAccessToken";
let platformClient = new PlatformClient(msg => requestLogger.log(msg), tokenResolver);

let headers = {};
let dataObject = { exampleProperty: 'exampleValue' };

let getResponse = await platformClient.get('VALID_URL', headers);
let postResponse = await platformClient.post('VALID_URL', dataObject, headers);
let putResponse = await platformClient.put('VALID_URL', dataObject, headers);
