const versionRequest = require('express-version-request')

app.use(versionRequest.setVersionByHeader('My-HTTP-Header-Name'))
