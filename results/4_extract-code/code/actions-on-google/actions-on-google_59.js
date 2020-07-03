// Import the appropriate service
const { smarthome } = require('actions-on-google')

// Create an app instance
const app = smarthome()

// Register handlers for Smart Home intents

app.onExecute((body, headers) => {
  return {
    requestId: 'ff36...',
    payload: {
      // ...
    },
  }
})

app.onQuery((body, headers) => {
  return {
    requestId: 'ff36...',
    payload: {
      // ...
    },
  }
})

app.onSync((body, headers) => {
  return {
    requestId: 'ff36...',
    payload: {
      // ...
    },
  }
})
