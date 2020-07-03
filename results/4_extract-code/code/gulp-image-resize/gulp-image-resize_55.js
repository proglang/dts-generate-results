var changed = require("gulp-changed");

gulp.task("changed", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(changed("dist"))
    .pipe(imageResize({ width : 100 }))
    .pipe(gulp.dest("dist"));
});
