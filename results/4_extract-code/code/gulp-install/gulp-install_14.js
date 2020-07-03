var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
    npm: '--production', // Either a single argument as a string
    bower: {allowRoot: true}, // Or arguments as an object (transformed using Dargs: https://www.npmjs.com/package/dargs)
    pip: ['--target', '.'] // Or arguments as an array
  }));
