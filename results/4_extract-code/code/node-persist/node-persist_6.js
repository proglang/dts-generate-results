const storage = require('node-persist');
const myStorage = storage.create({dir: 'myDir', ttl: 3000});
await myStorage.init();
