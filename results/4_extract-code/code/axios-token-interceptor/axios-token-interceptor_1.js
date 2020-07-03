const tokenProvider = require('axios-token-interceptor');

const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Configure the provider with the necessary options.
const options = { ... };
instance.interceptors.request.use(tokenProvider(options));

// When a call to an endpoint is made, a token will be provided as a header.
instance.get('/foo')
