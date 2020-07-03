const express        = require('express')
const hostValidation = require('host-validation')

const app = express()

// allow development hosts, a domain name, and a regex for all subdomains.
// any requests that don't supply a whitelisted Host will be rejected
// with a 403 HTTP status code 
// NOTE: custom errors can be returned by a config.fail function. see "custom 
// failure handlers" below.
app.use(hostValidation({ hosts: ['127.0.0.1:3000',
                                 'localhost:3000',
                                 'mydomain.com', 
                                 /.*\.mydomain\.com$/] }))

app.get('/', (req, res) => {
    res.send('Hello trusted client, thanks for including a whitelisted Host header.')
})

app.listen(3000, () => {
    console.log('server accepting requests w/ valid Host headers port 3000')
})
