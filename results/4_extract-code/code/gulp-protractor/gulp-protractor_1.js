
var protractor = require("gulp-protractor").protractor;

gulp.src(["./src/tests/*.js"])
    .pipe(protractor({
        configFile: "test/protractor.config.js",
        args: [
            '--baseUrl', 'http://127.0.0.1:8000',
            '--suite', 'login',
            '--params.environment', 'test'
        ]
    }))
    .on('error', function(e) { throw e })
