// `fs` is used instead of require to prevent caching in watch (require caches)
var fs = require('fs');
var semver = require('semver');

var getPackageJson = function () {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

// bump versions on package/bower/manifest
gulp.task('bump', function () {
  // reget package
  var pkg = getPackageJson();
  // increment version
  var newVer = semver.inc(pkg.version, 'patch');

  // uses gulp-filter
  var manifestFilter = tasks.filter(['manifest.json']);
  var regularJsons = tasks.filter(['!manifest.json']);

  return gulp.src(['./bower.json', './package.json', './src/manifest.json'])
    .pipe(tasks.bump({
      version: newVer
    }))
    .pipe(manifestFilter)
    .pipe(gulp.dest('./src'))
    .pipe(manifestFilter.restore())
    .pipe(regularJsons)
    .pipe(gulp.dest('./'));
});

// Run the gulp tasks
gulp.task('default', function(){
  gulp.run('bump');
});
