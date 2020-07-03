var isNotEmail = require('sane-email-validation').isNotEmail
var email = '...'

if (isNotEmail(email)) {
  console.log(`${email} is not valid.`)
} else {
  console.log(`${email} is valid.`)
}
