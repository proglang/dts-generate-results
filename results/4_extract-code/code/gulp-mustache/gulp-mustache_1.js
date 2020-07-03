var mustache = require("gulp-mustache");

gulp.src("./templates/*.mustache")
	.pipe(mustache({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
