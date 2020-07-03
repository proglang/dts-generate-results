const onError = require('@malijs/onerror')

function errorLogger (err, ctx) {
  console.log('Error on %s: %s', ctx.name, err.toString())
}

app.use(onError(errorLogger))
