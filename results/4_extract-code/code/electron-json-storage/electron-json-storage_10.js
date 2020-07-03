const storage = require('electron-json-storage');

const dataPath = storage.getDataPath();
console.log(dataPath);
