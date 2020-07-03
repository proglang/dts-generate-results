var StreamTest = require('streamtest');

describe('My Stream Lib', function() {

  // Iterating through versions
  StreamTest.versions.forEach(function(version) {

    describe('for ' + version + ' streams', function() {

      // here goes your code
      it('should work', function(done) {

        StreamTest[version].fromChunks(['a ', 'chunk', 'and', 'another'])
          .pipe(myTestedStream)
          .pipe(StreamTest[version].toText(function(err, text) {
            if(err) {
              done(err);
            }
            assert.equal(text, 'the text as i should be');
            done();
          }));

      });

    });

  });

});
