const versionRequest = require('express-version-request')
const options = {removeQueryParam: true}

app.use(versionRequest.setVersionByQueryParam('myQueryParam', options))
