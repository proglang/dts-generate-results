const hyperquest = require('hyperquest')
    , bl         = require('bl')
    , url        = 'https://raw.github.com/rvagg/bl/master/README.md'

hyperquest(url).pipe(bl(function (err, data) {
  console.log(data.toString())
}))
