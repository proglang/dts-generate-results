var reCAPTCHA = require('recaptcha2');

var recaptcha = new reCAPTCHA({
  siteKey: 'your-site-key', // retrieved during setup
  secretKey: 'your-secret-key' // retrieved during setup
  ssl: false // optional, defaults to true.
             // Disable if you don't want to access
             // the Google API via a secure connection
});
