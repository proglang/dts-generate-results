var HttpError = require("standard-http-error")

function RemoteError(res) {
  HttpError.call(this, res.statusCode, res.statusMessage)
}

RemoteError.prototype = Object.create(HttpError.prototype, {
  constructor: {value: RemoteError, configurable: true, writeable: true}
})
