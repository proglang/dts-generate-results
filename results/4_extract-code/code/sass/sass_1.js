var sass = require('sass');

sass.render({file: scss_filename}, function(err, result) { /* ... */ });

// OR

var result = sass.renderSync({file: scss_filename});
