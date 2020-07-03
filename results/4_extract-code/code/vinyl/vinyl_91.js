var Vinyl = require('vinyl');

Vinyl.isCustomProp('sourceMap'); // true
Vinyl.isCustomProp('path'); // false -> internal getter/setter
