const { EJSON } = require('bson');
const Int32 = require('mongodb').Int32;
const doc = { int32: new Int32(10) };

// prints '{"int32":{"$numberInt":"10"}}'
console.log(EJSON.stringify(doc, { relaxed: false }));

// prints '{"int32":10}'
console.log(EJSON.stringify(doc));
