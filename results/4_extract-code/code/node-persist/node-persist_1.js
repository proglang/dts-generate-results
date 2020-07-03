const storage = require('node-persist');

//you must first call storage.init
await storage.init( /* options ... */ );
await storage.setItem('name','yourname')
console.log(await storage.getItem('name')); // yourname
