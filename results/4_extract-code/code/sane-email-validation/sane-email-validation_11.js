const isNotEmail = require('sane-email-validation').isNotEmail
const email = '...'

if (isNotEmail(email)) {
  console.log(`${email} is not valid.`)
} else {
  console.log(`${email} is valid.`)
}
