const versionRequest = require('express-version-request')
function customParsingFunction(header) {
	//function body, that parses the header parameter and returns a string
}

app.use(versionRequest.setVersionByAcceptHeader(customParsingFunction))
