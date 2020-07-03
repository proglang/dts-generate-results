var gulp = require("gulp");
var msbuild = require("gulp-msbuild");

gulp.task("default", function() {
	return gulp.src("./project.sln")
		.pipe(msbuild());
});
