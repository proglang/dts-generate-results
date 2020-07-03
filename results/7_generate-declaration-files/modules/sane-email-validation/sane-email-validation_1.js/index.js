var isEmail = require('sane-email-validation')
var email = '...'

if (isEmail(email)) {
  console.log(`${email} is valid.`)
} else {
  console.log(`${email} is not valid.`)
}
