gulp.src('./js/*.js')
 .pipe(modernizr(require('./modernizr-config.json')))
