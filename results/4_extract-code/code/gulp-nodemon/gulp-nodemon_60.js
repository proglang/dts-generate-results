gulp.task('pluggable', function() {
  nodemon({ nodemon: require('nodemon'),
            script: 'server.js'})
})
