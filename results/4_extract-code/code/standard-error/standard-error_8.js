var Http = require("http")
var StandardError = require("standard-error")

function HttpError(code, msg) {
  StandardError.call(this, msg || Http.STATUS_CODES[code], {code: code})
}

HttpError.prototype = Object.create(StandardError.prototype, {
  constructor: {value: HttpError, configurable: true, writable: true}
})
