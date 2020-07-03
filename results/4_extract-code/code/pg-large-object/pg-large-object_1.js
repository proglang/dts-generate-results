const pgp = require('pg-promise')();
const {LargeObjectManager} = require('pg-large-object');
const {createWriteStream} = require('fs');

const db = pgp('postgres://postgres:1234@localhost/postgres');

// When working with Large Objects, always use a transaction
db.tx(tx => {
  const man = new LargeObjectManager({pgPromise: tx});

  // A LargeObject oid, probably stored somewhere in one of your own tables.
  const oid = 123;

  // If you are on a high latency connection and working with
  // large LargeObjects, you should increase the buffer size.
  // The buffer should be divisible by 2048 for best performance
  // (2048 is the default page size in PostgreSQL, see LOBLKSIZE)
  const bufferSize = 16384;

  return man.openAndReadableStreamAsync(oid, bufferSize)
  .then(([size, stream]) => {
    console.log('Streaming a large object with a total size of', size);

    // Store it as an image
    const fileStream = createWriteStream('my-file.png');
    stream.pipe(fileStream);

    return new Promise((resolve, reject) => {
      stream.on('end', resolve);
      stream.on('error', reject);
    });
  });
})
.then(() => {
  console.log('Done!');
})
.catch(error => {
  console.log('Something went horribly wrong!', error);
});
