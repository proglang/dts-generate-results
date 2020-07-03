var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  iam_apikey: '<apikey>',
  version: '2018-04-05',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});

nlu.analyze(
  {
    html: file_data, // Buffer or String
    features: {
      concepts: {},
      keywords: {}
    }
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
