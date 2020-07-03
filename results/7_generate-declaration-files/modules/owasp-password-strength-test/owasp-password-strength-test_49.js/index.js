var owasp = require('owasp-password-strength-test');

// Pass a hash of settings to the `config` method. The settings shown here are
// the defaults.
owasp.config({
  allowPassphrases       : true,
  maxLength              : 128,
  minLength              : 10,
  minPhraseLength        : 20,
  minOptionalTestsToPass : 4,
});
