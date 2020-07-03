const Grecaptcha = require('grecaptcha')

const client = new Grecaptcha('secret')

if (await client.verify('token')) {
	// reCAPTCHA response was accepted!
}
else {
	// reCAPTCHA token denied.
}
