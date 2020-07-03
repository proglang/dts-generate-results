var AssistantV1 = require('ibm-watson/assistant/v1');

var assistant = new AssistantV1({
  iam_apikey: '<apikey>',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

assistant.message(
  {
    input: { text: "What's the weather?" },
    workspace_id: '<workspace id>'
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
