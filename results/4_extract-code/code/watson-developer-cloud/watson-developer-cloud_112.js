var AssistantV2 = require('ibm-watson/assistant/v2');

var assistant = new AssistantV2({
  iam_apikey: '<apikey>',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-09-19'
});

assistant.message(
  {
    input: { text: "What's the weather?" },
    assistant_id: '<assistant id>',
    session_id: '<session id>',
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
