var gulp = require('gulp');
var UndertakerRegistry = require('undertaker-registry');

var registry = new UndertakerRegistry();

gulp.registry(registry);
