const S3rver = require("s3rver");
let instance;

before(function(done) {
  instance = new S3rver({
    port: 4569,
    hostname: "localhost",
    silent: false,
    directory: "/tmp/s3rver_test_directory"
  }).run(done);
});

after(function(done) {
  instance.close(done);
});
