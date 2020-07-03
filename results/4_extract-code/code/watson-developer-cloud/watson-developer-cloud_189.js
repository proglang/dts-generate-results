var ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  iam_apikey: '<apikey>',
  version: '2016-05-19',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});

toneAnalyzer.tone(
  {
    tone_input: 'Greetings from Watson Developer Cloud!',
    content_type: 'text/plain'
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
