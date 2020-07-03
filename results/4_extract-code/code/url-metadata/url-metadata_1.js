const urlMetadata = require('url-metadata')
urlMetadata('http://bit.ly/2ePIrDy').then(
  function (metadata) { // success handler
    console.log(metadata)
  },
  function (error) { // failure handler
    console.log(error)
  })
