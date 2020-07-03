var DiscoveryV1 = require('ibm-watson/discovery/v1');

var discovery = new DiscoveryV1({
  iam_apikey: '<apikey>',
  url: 'https://gateway.watsonplatform.net/discovery/api/',
  version: '2017-09-01'
});

discovery.query(
  {
    environment_id: '<environment_id>',
    collection_id: '<collection_id>',
    query: 'my_query'
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
