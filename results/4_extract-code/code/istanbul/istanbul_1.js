    var istanbul = require('istanbul');
    var instrumenter = new istanbul.Instrumenter();

    var generatedCode = instrumenter.instrumentSync('function meaningOfLife() { return 42; }',
        'filename.js');
