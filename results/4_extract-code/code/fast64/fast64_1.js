var fast64 = require('base64');

// For standard base64
base64 = fast64.encode(string);
string = fast64.decode(base64);
// If you want to decode till Uint8Array and skip the UTF8 decoding.
// This is useful in cases where you need Uint8Array for eg. create blob out of Uint8Array result.
uint8Array = fast64.decode(base64, {uint8Array:true});


// For URL-safe base64 (-_ in place of +/, and no padding)
base64 = fast64.urlencode(string);
string = fast64.urldecode(base64);
// If you want to decode till Uint8Array and skip the UTF8 decoding.
// This is useful in cases where you need Uint8Array for eg. create blob out of Uint8Array result.
uint8Array = fast64.urldecode(base64, {uint8Array:true});
