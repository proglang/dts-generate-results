const versionRequest = require('express-version-request')

app.use(versionRequest.setVersionByQueryParam())
