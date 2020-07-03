var install = require("gulp-install");

gulp.src(__dirname + '/templates/**')
  .pipe(gulp.dest('./'))
  .pipe(install({
    commands: {
      'package.json': 'yarn'
    },
    yarn: ['--extra', '--args', '--here']
  }));
