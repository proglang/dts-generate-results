const Chain = require('stream-chain');

const fs = require('fs');
const zlib = require('zlib');
const {Transform} = require('stream');

// the chain will work on a stream of number objects
const chain = new Chain([
  // transforms a value
  x => x * x,
  // returns several values
  x => [x - 1, x, x + 1],
  // waits for an asynchronous operation
  async x => await getTotalFromDatabaseByKey(x),
  // returns multiple values with a generator
  function* (x) {
    for (let i = x; i > 0; --i) {
      yield i;
    }
    return 0;
  },
  // filters out even values
  x => x % 2 ? x : null,
  // uses an arbitrary transform stream
  new Transform({
    writableObjectMode: true,
    transform(x, _, callback) {
      // transform to text
      callback(null, x.toString());
    }
  }),
  // compress
  zlib.createGzip()
]);
// log errors
chain.on('error', error => console.log(error));
// use the chain, and save the result to a file
dataSource.pipe(chain).pipe(fs.createWriteStream('output.txt.gz'));
