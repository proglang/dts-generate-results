const BSON = require('bson');
const Long = BSON.Long;

const doc = { long: Long.fromNumber(100) };

// Serialize a document
const data = BSON.serialize(doc);
console.log('data:', data);

// Deserialize the resulting Buffer
const doc_2 = BSON.deserialize(data);
console.log('doc_2:', doc_2);
