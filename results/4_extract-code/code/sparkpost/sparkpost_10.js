const SparkPost = require('sparkpost');
const options = {
  endpoint: 'https://dev.sparkpost.com:443'
};
const client = new SparkPost('YOUR_API_KEY', options);
