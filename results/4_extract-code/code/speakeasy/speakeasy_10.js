// Use the qrcode package
// npm install --save qrcode
var QRCode = require('qrcode');

// Get the data URL of the authenticator URL
QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {
  console.log(data_url);

  // Display this data URL to the user in an <img> tag
  // Example:
  write('<img src="' + data_url + '">');
});
