var parallel = require("concurrent-transform");
var os = require("os");

gulp.task("parallel", function () {
  gulp.src("src/**/*.{jpg,png}")
    .pipe(parallel(
      imageResize({ width : 100 }),
      os.cpus().length
    ))
    .pipe(gulp.dest("dist"));
});
