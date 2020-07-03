gulp.task('run', ['default', 'watch'], function(done) {
    var nodemon = require('gulp-nodemon'),
        spawn   = require('child_process').spawn,
        bunyan

    nodemon({
        script: paths.server,
        ext:    'js json',
        ignore: [
            'var/',
            'node_modules/'
        ],
        watch:    [paths.etc, paths.src],
        stdout:   false,
        readable: false,
        done: done
    })
    .on('readable', function() {

        // free memory
        bunyan && bunyan.kill()

        bunyan = spawn('./node_modules/bunyan/bin/bunyan', [
            '--output', 'short',
            '--color'
        ])

        bunyan.stdout.pipe(process.stdout)
        bunyan.stderr.pipe(process.stderr)

        this.stdout.pipe(bunyan.stdin)
        this.stderr.pipe(bunyan.stdin)
    });
})
