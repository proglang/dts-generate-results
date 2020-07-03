var rename = require("gulp-rename");

gulp.task("suffix", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(imageResize({ width : 100 }))
    .pipe(rename(function (path) { path.basename += "-thumbnail"; }))
    .pipe(gulp.dest("dist"));
});
