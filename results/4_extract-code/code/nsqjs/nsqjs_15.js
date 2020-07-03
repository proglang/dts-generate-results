const nsq = require('nsqjs')

const reader = new nsq.Reader('sample_topic', 'test_channel', {
  lookupdHTTPAddresses: '127.0.0.1:4161'
})

reader.connect()

reader.on('message', msg => {
  console.log('Received message [%s]', msg.id)

  const touch = () => {
    if (!msg.hasResponded) {
      console.log('Touch [%s]', msg.id)
      msg.touch()

      // Touch the message again a second before the next timeout.
      setTimeout(touch, msg.timeUntilTimeout() - 1000)
    }
  }

  const finish = () => {
    console.log('Finished message [%s]: %s', msg.id, msg.body.toString())
    msg.finish()
  }

  console.log('Message timeout is %f secs.', msg.timeUntilTimeout() / 1000)
  setTimeout(touch, msg.timeUntilTimeout() - 1000)

  // Finish the message after 2 timeout periods and 1 second.
  setTimeout(finish, msg.timeUntilTimeout() * 2 + 1000)
})
