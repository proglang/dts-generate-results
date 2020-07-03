var gulp = require('gulp');
var usage = require('gulp-help-doc');
var args = require('yargs').argv;

/**
 * This simply defines help task which would produce usage
 * display for this gulpfile. Simple run `gulp help` to see how it works.
 * NOTE: this task will not appear in a usage output as far as it is not
 * marked with the @task tag.
 */
gulp.task('help', function() { return usage(gulp); });


/**
 * We may also link usage as default gulp task:
 */
gulp.task('default', ['help']);


/**
 * This task will appear in usage output, because it is marked with the
 * proper @task tag. Current information you're reading will be the task
 * description.
 *
 * @task {demo}
 * @order {1}
 */
 gulp.task('demo', function() {});

/**
 * Another task, which could handle some command-line argulents, for example,
 * by using 'yargs' module. It is possible to describe expected by a task
 * arguments using @arg tags. It is possible to specify as much argument
 * tags as required by the job done within this task. For example here we 
 * describe three arguments:
 *
 * @task {test}
 * @arg {argOne} first argument description which will appear in usage output
 * @arg {argTwo} second argument description
 * @arg {argThree} third argument description
 */
gulp.task('test', ['demo'], function() {
    var one = args.argOne;
    var thwo = args.argTwo;
    var three = args.argThree;

    // ... do something taking args into account ...

});
