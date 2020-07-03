//Require the module
var Mixpanel = require('react-native-mixpanel');

//Init Mixpanel SDK with your project token
Mixpanel.sharedInstanceWithToken(YOUR_PROJECT_TOKEN);

//Send and event name with no properties
Mixpanel.track("Event name");

//Track event with properties
Mixpanel.trackWithProperties('Click Button', {button_type: 'yellow button', button_text: 'magic button'});

//Create Alias from unique id, i.e. create a new mixpanel profile: to call when a user signs up, with a unique id that is not used by another mixpanel profile as param
Mixpanel.createAlias(UNIQUE_ID)

//Identify, i.e. associate to an existing mixpanel profile: to call when a user logs in and is already registered in Mixpanel with this unique id
Mixpanel.identify(UNIQUE_ID)

//Set People properties (warning: if no mixpanel profile has been assigned to the current user when this method is called, it will automatically create a new mixpanel profile and the user will no longer be anonymous in Mixpanel)
Mixpanel.set({"$email": "elvis@email.com"});

//Set People Properties Once (warning: if no mixpanel profile has been assigned to the current user when this method is called, it will automatically create a new mixpanel profile and the user will no longer be anonymous in Mixpanel)
Mixpanel.setOnce({"$email": "elvis@email.com", "Created": new Date().toISOString()});

// Timing Events
// Sets the start time for an action, for example uploading an image
Mixpanel.timeEvent("Image Upload");
// to be followed by a tracking event to define the end time
Mixpanel.track("Image Upload");

// Register super properties
Mixpanel.registerSuperProperties({"Account type": "Free", "User Type": "Vendor"});

// Register super properties Once
Mixpanel.registerSuperPropertiesOnce({"Gender": "Female"});

// track Revenue
Mixpanel.trackCharge(399);

// track with properties
Mixpanel.trackChargeWithProperties(399, {"product": "ACME Wearable tech"});

// increment property
Mixpanel.increment("Login Count", 1);

// send push notifications token to Mixpanel
// Android
Mixpanel.setPushRegistrationId("GCM/FCM push token");

//tell Mixpanel which user record in People Analytics should receive the messages when they are sent from the Mixpanel app,
//make sure you call this right after you call `identify`
Mixpanel.initPushHandling(YOUR_12_DIGIT_GOOGLE_SENDER_ID);

//unregister a device for push notifications
Mixpanel.clearPushRegistrationId();

// iOS
Mixpanel.addPushDeviceToken("APNS push token")

// Mixpanel reset method (warning: it will also generate a new unique id and call the identify method with it. Thus, the user will not be anonymous in Mixpanel.)
Mixpanel.reset();

// get the last distinct id set with identify or, if identify hasn't been
// called, the default mixpanel id for this device.
Mixpanel.getDistinctId(function(id){})
