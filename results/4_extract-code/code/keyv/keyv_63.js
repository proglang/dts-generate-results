const AwesomeModule = require('awesome-module');

// Caches stuff in memory by default
const awesomeModule = new AwesomeModule();

// After npm install --save keyv-redis
const awesomeModule = new AwesomeModule({ cache: 'redis://localhost' });

// Some third-party module that implements the Map API
const awesomeModule = new AwesomeModule({ cache: some3rdPartyStore });
