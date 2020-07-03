var TwitterStreamChannels = require('twitter-stream-channels');
var credentials = require('./my.twitter.credentials.json');

var client = new TwitterStreamChannels(credentials);

var channels = {
	"languages" : ['javascript','php','java','python','perl'],
	"js-frameworks" : ['angularjs','jquery','backbone','emberjs'],
	"web" : ['javascript','nodejs','html5','css','angularjs']
};

var stream = client.streamChannels({track:channels});

stream.on('channels/languages',function(tweet){
    console.log('>languages',tweet.text);//any tweet with 'javascript','php','java','python','perl'
});

stream.on('channels/js-frameworks',function(tweet){
    console.log('>frameworks',tweet.text);//any tweet with 'angularjs','jquery','backbone','emberjs'
});

stream.on('channels/web',function(tweet){
    console.log('>web',tweet.text);//any tweet with 'javascript','nodejs','html5','css','angularjs'
});

//If you want, you can listen on all the channels and pickup the $channels added by the module
//It contains the channel and the keywords picked up in the tweet
//stream.on('channels',function(tweet){
//    console.log(tweet.$channels,tweet.text);//any tweet with any of the keywords above
//});

//If you're really picky, you can listen to only some keywords
//stream.on('keywords/javascript',function(tweet){
//    console.log(tweet.text);//any tweet with the keyword "javascript"
//});

setTimeout(function(){
    stream.stop();//closes the stream connected to Twitter
	console.log('>stream closed after 100 seconds');
},100000);
