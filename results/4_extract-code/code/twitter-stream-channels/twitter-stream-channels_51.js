var credentials = require('./twitter.credentials.json');
require('twitter-stream-channels').launchMockDataRetriever(credentials,{
	output: "./save/your/tweets.json",
	track:['blue','white','yellow','green','orange','kiwi','apple','lemon','coconut','Luke','Leia','Han','Yoda'],
	maxNumber:200,
	timeout:50000
});
