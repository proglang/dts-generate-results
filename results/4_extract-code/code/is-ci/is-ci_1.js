const isCI = require('is-ci')

if (isCI) {
  console.log('The code is running on a CI server')
}
