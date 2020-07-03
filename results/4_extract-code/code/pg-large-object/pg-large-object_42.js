const pgp = require('pg-promise')();
const {LargeObjectManager} = require('pg-large-object');
const {createReadStream} = require('fs');

const db = pgp('postgres://postgres:1234@localhost/postgres');

// When working with Large Objects, always use a transaction
db.tx(tx => {
  const man = new LargeObjectManager({pgPromise: tx});

  // If you are on a high latency connection and working with
  // large LargeObjects, you should increase the buffer size.
  // The buffer should be divisible by 2048 for best performance
  // (2048 is the default page size in PostgreSQL, see LOBLKSIZE)
  const bufferSize = 16384;

  return man.createAndWritableStreamAsync(bufferSize)
  .then(([oid, stream]) => {
    // The server has generated an oid
    console.log('Creating a large object with the oid', oid);

    const fileStream = createReadStream('upload-my-file.png');
    fileStream.pipe(stream);

    return new Promise((resolve, reject) => {
      stream.on('finish', resolve);
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
