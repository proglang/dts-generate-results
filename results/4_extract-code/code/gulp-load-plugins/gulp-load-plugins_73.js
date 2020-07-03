var scoped = require('gulp-load-plugins')({
  // true is the default value
  maintainScope: true,
});

scoped.myco.testPlugin();

var nonScoped = require('gulp-load-plugins')({
  maintainScope: false,
});

nonScoped.testPlugin();
