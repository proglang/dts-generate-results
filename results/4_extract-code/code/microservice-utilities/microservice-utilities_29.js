const axios = require('axios');
const { ServiceTokenProvider } = require('microservice-utilities');
const configuration = {
  clientId: 'CLIENT_ID',
  encryptedClientSecret: 'BASE64_KMS_ENCRYPTED_CLIENT_SECRET',
  audience: 'https://example.com/',
  tokenEndpoint: 'https://example.com/oauth/token'
};

let kmsClient = new aws.KMS({ region: 'eu-west-1' });
let serviceTokenProvider = new ServiceTokenProvider(axios.create(), kmsClient, configuration);

// recommended way to retrieve token (utilizes caching and takes care of token expiration)
let accessToken = await serviceTokenProvider.getToken();

// or bypass caching and get new token
accessToken = await serviceTokenProvider.getTokenWithoutCache();
