var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
      args: ['dev', '--no-shrinkwrap' ]} // npm install --dev --no-shrinkwrap
    ));  
