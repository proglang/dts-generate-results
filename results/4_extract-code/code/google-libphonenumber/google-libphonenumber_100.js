// Get an instance of `ShortNumberInfo`.
const shortInfo = require('google-libphonenumber').ShortNumberInfo.getInstance();

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Result from connectsToEmergencyNumber().
console.log(shortInfo.connectsToEmergencyNumber('911', 'US'));
// => true

// Result from isPossibleShortNumber().
console.log(shortInfo.isPossibleShortNumber(phoneUtil.parse('123456', 'FR')));
// => true

// Result from isPossibleShortNumberForRegion().
console.log(shortInfo.isPossibleShortNumberForRegion(phoneUtil.parse('123456', 'FR'), 'FR'));
// => true
