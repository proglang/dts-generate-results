before(function (done) {

    var filename = "fileForResponse";
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
    });

    mockery.registerMock('request-promise', function () {
        var response = fs.readFileSync(__dirname + '/data/' + filename, 'utf8');
        return Bluebird.resolve(response.trim());
    });

    done();
});

after(function (done) {
    mockery.disable();
    mockery.deregisterAll();
    done();
});

describe('custom test case', function () {
    //  Test some function/module/... which uses request-promise
    //  and it will always receive the predefined "fileForResponse" as data, e.g.:
    var rp = require('request-promise');
    rp(...).then(function(data) {
        // ➞ data is what is in fileForResponse
    });
});
