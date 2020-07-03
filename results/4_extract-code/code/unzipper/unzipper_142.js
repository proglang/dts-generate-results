var unzipper = require('./unzip');
var AWS = require('aws-sdk');
var s3Client = AWS.S3(config);

async function main() {
  const directory = await unzipper.Open.s3(s3Client,{Bucket: 'unzipper', Key: 'archive.zip'});
  return new Promise( (resolve, reject) => {
    directory.files[0]
      .stream()
      .pipe(fs.createWriteStream('firstFile'))
      .on('error',reject)
      .on('finish',resolve)
  });
}

main();
