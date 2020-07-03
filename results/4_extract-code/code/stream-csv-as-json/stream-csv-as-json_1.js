const {chain}  = require('stream-chain');

const {parser} = require('stream-csv-as-json');
const {asObjects} = require('stream-csv-as-json/AsObjects');
const {StreamValues} = require('stream-json/streamers/StreamValues');

const fs   = require('fs');
const zlib = require('zlib');

const pipeline = chain([
  fs.createReadStream('sample.csv.gz'),
  zlib.createGunzip(),
  parser(),
  asObjects(),
  streamValues(),
  data => {
    const value = data.value;
    return value && value.department === 'accounting' ? data : null;
  }
]);

let counter = 0;
pipeline.on('data', () => ++counter);
pipeline.on('end', () =>
  console.log(`The accounting department has ${counter} employees.`));
