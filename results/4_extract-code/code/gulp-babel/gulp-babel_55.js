const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('src/app.js')
		.pipe(babel({
			plugins: ['@babel/transform-runtime']
		}))
		.pipe(gulp.dest('dist'))
);
