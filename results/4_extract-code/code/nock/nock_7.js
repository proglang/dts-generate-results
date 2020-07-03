var nockBack = require('nock').back;
var request = require('request');
nockBack.setMode('record');

nockBack.fixtures = __dirname + '/nockFixtures'; //this only needs to be set once in your test helper

// recording of the fixture
nockBack('zomboFixture.json', function(nockDone) {
  request.get('http://zombo.com', function(err, res, body) {
    nockDone();


    // usage of the created fixture
    nockBack('zomboFixture.json', function (nockDone) {
      http.get('http://zombo.com/').end(); // respond body "Ok"

      this.assertScopesFinished(); //throws an exception if all nocks in fixture were not satisfied
      http.get('http://zombo.com/').end(); // throws exception because someFixture.json only had one call

      nockDone(); //never gets here
    });
  });
});
