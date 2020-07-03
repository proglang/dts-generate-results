const isEmail = require('sane-email-validation')
const email = '...'

if (isEmail(email)) {
  console.log(`${email} is valid.`)
} else {
  console.log(`${email} is not valid.`)
}
