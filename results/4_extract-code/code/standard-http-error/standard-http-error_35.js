var HttpError = require("standard-http-error")
var app = require("express")()

app.get("/account", function(req, res, next) {
  if (req.account == null) throw new HttpError(401)
  if (req.account.budget == 0) throw new HttpError(402)
  // ...
})

app.use(function(err, req, res, next) {
  if (!(err instanceof HttpError)) return void next(err)

  res.statusCode = err.code
  res.statusMessage = err.message
  res.render("error", {title: err.message})
})
