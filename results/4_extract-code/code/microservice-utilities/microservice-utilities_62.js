const axios = require('axios');
let axiosClient = axios.create({ timeout: 3000 });
new PlatformClient(msg => requestLogger.log(msg), tokenResolver, { client: axiosClient });
