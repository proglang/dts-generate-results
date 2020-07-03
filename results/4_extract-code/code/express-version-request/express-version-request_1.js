const versionRequest = require('express-version-request')

app.use(versionRequest.setVersion('1.2.3'))
