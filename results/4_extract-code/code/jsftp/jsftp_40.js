const {SocksClient} = require('socks');
const ftp = new Ffp({
  host: 'localhost',
  port: 3333,
  user: 'user',
  pass: 'password',
  createSocket: ({port, host}, firstAction) => {
    return SocksClient.createConnection({
      proxy: {
        ipaddress: '159.203.75.200'
        port: 1080,
        type: 5
      },

      command: 'connect',

      destination: {
        host,
        port
      }
    })
  }
})
