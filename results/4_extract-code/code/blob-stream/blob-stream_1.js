var blobStream = require('blob-stream');

someStream
  .pipe(blobStream())
  .on('finish', function() {
    // get a blob
    var blob = this.toBlob();
    
    // or get a blob URL
    var url = this.toBlobURL();
    window.open(url);
  });
