const gulp = require('gulp');
const babel = require('gulp-babel');
const through = require('through2');

function logBabelMetadata() {
	return through.obj((file, enc, cb) => {
		console.log(file.babel.test); // 'metadata'
		cb(null, file);
	});
}

gulp.task('default', () =>
	gulp.src('src/**/*.js')
		.pipe(babel({
			// plugin that sets some metadata
			plugins: [{
				post(file) {
					file.metadata.test = 'metadata';
				}
			}]
		}))
		.pipe(logBabelMetadata())
)
