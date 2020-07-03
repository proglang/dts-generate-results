// first run `npm install promise-polyfill --save
if (typeof Promise == 'undefined') {
  global.Promise = require('promise-polyfill')
}
