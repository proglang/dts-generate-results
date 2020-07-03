// submodule tasks/mygulptask.js

var gulp = require('gulp'), // might be a different instance than the toplevel one
    // this uses the gulp you provide
    runSequence = require('run-sequence').use(gulp);
    
    // ...and then use normally
    runSequence('subtask1', 'subtask2');
