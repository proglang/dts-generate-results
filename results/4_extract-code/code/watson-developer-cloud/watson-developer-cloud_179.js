var PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');

var personalityInsights = new PersonalityInsightsV3({
  iam_apikey: '<apikey>',
  version: '2016-10-19',
  url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});

personalityInsights.profile(
  {
    content: 'Enter more than 100 unique words here...',
    content_type: 'text/plain',
    consumption_preferences: true
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
