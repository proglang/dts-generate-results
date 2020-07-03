// Import the appropriate service and chosen wrappers
const {
  actionssdk,
  Image,
} = require('actions-on-google')

// Create an app instance
const app = actionssdk()

// Register handlers for Actions SDK intents

app.intent('actions.intent.MAIN', conv => {
  conv.ask('Hi, how is it going?')
  conv.ask(`Here's a picture of a cat`)
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }))
})

app.intent('actions.intent.TEXT', (conv, input) => {
  if (input === 'bye' || input === 'goodbye') {
    return conv.close('See you later!')
  }
  conv.ask(`I didn't understand. Can you tell me something else?`)
})
