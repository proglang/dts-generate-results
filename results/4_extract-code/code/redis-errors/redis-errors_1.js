const { ReplyError, InterruptError } = require('redis-errors');

// Using async await
try {
  await client.set('foo') // Missing value
} catch (err) {
  if (err instanceof InterruptError) {
    console.error('Command might have been processed')
  }
  if (err instanceof ReplyError) {
    // ...
  }
  throw err
}

// Using callbacks
client.set('foo', (err, res) => {
  if (err) {
    if (err instanceof InterruptError) {
      // ...
    }
  }
})
