var gcm = require('node-gcm');

// Create a message
// ... with default values
var message = new gcm.Message();

// ... or some given values
var message = new gcm.Message({
	collapseKey: 'demo',
	priority: 'high',
	contentAvailable: true,
	delayWhileIdle: true,
	timeToLive: 3,
	restrictedPackageName: "somePackageName",
	dryRun: true,
	data: {
		key1: 'message1',
		key2: 'message2'
	},
	notification: {
		title: "Hello, World",
		icon: "ic_launcher",
		body: "This is a notification that will be displayed if your app is in the background."
	}
});

// Change the message data
// ... as key-value
message.addData('key1','message1');
message.addData('key2','message2');

// ... or as a data object (overwrites previous data object)
message.addData({
	key1: 'message1',
	key2: 'message2'
});

// Set up the sender with you API key
var sender = new gcm.Sender('insert Google Server API Key here');

// Add the registration tokens of the devices you want to send to
var registrationTokens = [];
registrationTokens.push('regToken1');
registrationTokens.push('regToken2');

// Send the message
// ... trying only once
sender.sendNoRetry(message, { registrationTokens: registrationTokens }, function(err, response) {
  if(err) console.error(err);
  else    console.log(response);
});

// ... or retrying
sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});

// ... or retrying a specific number of times (10)
sender.send(message, { registrationTokens: registrationTokens }, 10, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});

// Q: I need to remove all "bad" token from my database, how do I do that? 
//    The results-array does not contain any tokens!
// A: The array of tokens used for sending will match the array of results, so you can cross-check them.
sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {  
  var failed_tokens = response.results                           // Array with result for each token we messaged
    .map((res, i) => res.error ? registrationTokens[i] : null)   // If there's any kind of error, 
                                                                 // pick _the token_ from the _other_ array
    .filter(token => token);                                     // Remove all the null values
  console.log('These tokens are no longer ok:', failed_tokens);
});
