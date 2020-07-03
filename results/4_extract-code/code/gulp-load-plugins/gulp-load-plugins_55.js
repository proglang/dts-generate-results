var $ = require('gulp-load-plugins')({
  postRequireTransforms: {
    foo: function(foo) {
      return foo.configure(...);
    }
  }
});

$.foo // is already configured
