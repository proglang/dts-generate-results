var SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
  iam_apikey: '<apikey>',
  url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});

var params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

speechToText.recognize(params)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });

// or streaming
fs.createReadStream('./resources/speech.wav')
  .pipe(speechToText.recognizeUsingWebSocket({ content_type: 'audio/l16; rate=44100' }))
  .pipe(fs.createWriteStream('./transcription.txt'));
