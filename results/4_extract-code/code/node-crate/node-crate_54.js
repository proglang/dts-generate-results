
const crateLocal = require('node-crate');
const crateCloud = crateLocal.getNewInstance();

crateLocal.connect('http://localhost:4200');
crateCloud.connect('https://user:password@cratecloud.com:4200');

