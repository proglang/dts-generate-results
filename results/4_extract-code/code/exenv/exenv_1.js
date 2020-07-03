var ExecutionEnvironment = require('exenv');

// You now have...
ExecutionEnvironment.canUseDOM             // is the DOM available? i.e window document etc. 
ExecutionEnvironment.canUseWorkers         // are Web Workers available?
ExecutionEnvironment.canUseEventListeners  // are Events available? i.e addEventListener etc.
ExecutionEnvironment.canUseViewport        // is there a viewport? i.e window.screen
