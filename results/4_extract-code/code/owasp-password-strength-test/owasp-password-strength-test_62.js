var owasp = require('owasp-password-strength-test');

// push "required" tests onto `tests.required` array, and push "optional" tests
// onto the `tests.optional` array.
owasp.tests.required.push(function(password) {
  if (password === 'one two three four five') {
    return "That's the kind of thing an idiot would have on his luggage!";
  }
});
