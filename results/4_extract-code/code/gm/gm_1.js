var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

// resize and remove EXIF profile data
gm('/path/to/my/img.jpg')
.resize(240, 240)
...
