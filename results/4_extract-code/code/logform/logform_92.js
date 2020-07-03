const { format } = require('logform');
const { errors } = format;

const errorsFormat = errors({ stack: true })

const info = errorsFormat.transform({
  message: new Error('Oh no!')
});

console.log(info);
// Error: Oh no!
//     at repl:1:13
//     at ContextifyScript.Script.runInThisContext (vm.js:50:33)
//     at REPLServer.defaultEval (repl.js:240:29)
//     at bound (domain.js:301:14)
//     at REPLServer.runBound [as eval] (domain.js:314:12)
//     at REPLServer.onLine (repl.js:468:10)
//     at emitOne (events.js:121:20)
//     at REPLServer.emit (events.js:211:7)
//     at REPLServer.Interface._onLine (readline.js:282:10)
//     at REPLServer.Interface._line (readline.js:631:8)
