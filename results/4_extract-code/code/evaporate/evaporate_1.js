require('crypto');

var config = {
     signerUrl: <SIGNER_URL>,
     aws_key: <AWS_KEY>,
     bucket: <AWS_BUCKET>,
     cloudfront: true,
     computeContentMd5: true,
     cryptoMd5Method: function (data) { return crypto.createHash('md5').update(data).digest('base64'); }
};

return Evaporate.create(config)
    .then(function (evaporate) {

      var file = new File([""], "file_object_to_upload"),
          addConfig = {
            name: file.name,
            file: file,
            progress: function (progressValue) { console.log('Progress', progressValue); },
            complete: function (_xhr, awsKey) { console.log('Complete!'); },
          },
          overrides = {
            bucket: AWS_BUCKET // Shows that the bucket can be changed per
          };
      evaporate.add(addConfig, overrides)
          .then(function (awsObjectKey) {
                console.log('File successfully uploaded to:', awsObjectKey);
              },
              function (reason) {
                console.log('File did not upload sucessfully:', reason);
              });
    });
