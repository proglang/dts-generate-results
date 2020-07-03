
// gulpfile.js should be in workspace root for this example
var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');

function getProtractorBinary(binaryName){
    var winExt = /^win/.test(process.platform)? '.cmd' : '';
    var protractorBin = path.join('node_modules', '.bin', binaryName);
    return path.join(protractorBin, winExt);
}

gulp.task('protractor-install', function(done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
        stdio: 'inherit'
    }).once('close', done);
});

gulp.task('protractor-run', function (done) {
    var argv = process.argv.slice(3); // forward args to protractor
    child_process.spawn(getProtractorBinary('protractor'), argv, {
        stdio: 'inherit'
    }).once('close', done);
});

