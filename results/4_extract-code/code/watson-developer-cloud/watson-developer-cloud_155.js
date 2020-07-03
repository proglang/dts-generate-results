var TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
var fs = require('fs');

var textToSpeech = new TextToSpeechV1({
  iam_apikey: '<apikey>',
  url: 'https://stream.watsonplatform.net/text-to-speech/api/'
});

var params = {
  text: 'Hello from IBM Watson',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
};

// Synthesize speech, correct the wav header, then save to disk
// (wav header requires a file length, but this is unknown until after the header is already generated and sent)
textToSpeech
  .synthesize(params)
  .then(result => {
    textToSpeech.repairWavHeader(audio);
    fs.writeFileSync('audio.wav', audio);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });


// or, using WebSockets
textToSpeech.synthesizeUsingWebSocket(params);
synthStream.pipe(fs.createWriteStream('./audio.ogg'));
// see more information in examples/text_to_speech_websocket.js
