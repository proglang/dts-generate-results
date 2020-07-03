const irc = require('slate-irc')
const net = require('net')

const stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
})

const client = irc(stream)

client.pass('pass')
client.nick('tobi')
client.user('tobi', 'Tobi Ferret')

client.join('#express')
client.names('#express', (err, names) => {
  console.log(names)
})
