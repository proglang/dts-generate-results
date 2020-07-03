const functions = require('firebase-functions')

// ... app code here

// name has to be `dialogflowFirebaseFulfillment`
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
