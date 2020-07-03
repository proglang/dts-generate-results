var TwitterStreamChannelsMocked = require('twitter-stream-channels').getMockedClass();
var client = new TwitterStreamChannelsMocked({
	tweets: require('./save/your/tweets.json'),
	singleRun: false //so that you loop on your mocked tweets unless you call .stop() (if put at true, emulates a disconnection from twitter)
});
// ... and then you can code like the example above (without connecting to twitter)
