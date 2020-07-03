const {CompositeDisposable} = require('event-kit')

const subscriptions = new CompositeDisposable()
subscriptions.add(user1.onDidChangeName((name) => console.log(`User 1: ${name}`))
subscriptions.add(user2.onDidChangeName((name) => console.log(`User 2: ${name}`))

// Later, to unsubscribe from *both*...
subscriptions.dispose()
