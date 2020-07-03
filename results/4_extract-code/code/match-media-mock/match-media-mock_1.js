var matchMediaMock = require('match-media-mock').create()
matchMediaMock.setConfig({type: 'screen', width: 1200})

matchMediaMock('(max-width: 991px)').matches // false
matchMediaMock('(max-width: 1240px)').matches // true

var mediaQueryList = matchMediaMock(mediaQuery)
mediaQueryList.addListener(listener)
mediaQueryList.removeListener(listener)
mediaQueryList.callListeners()
