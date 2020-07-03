var Radium = require('radium')
var matchMediaMock = require('match-media-mock').create()
Radium.config.setMatchMedia(matchMediaMock)

app.get('/app/:width/:height', function(req, res) {
  matchMediaMock.setConfig({
    type: 'screen',
    width: req.params.width,
    height: req.params.height
  })
  var html = React.renderToString(<RadiumApp/>)
  res.end(html)
})
