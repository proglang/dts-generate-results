// index.js

var ralP = require('./ral.js');
var assert = require('assert');

ralP('MAPAPI', {
    data: {
        region: '北京',
        query: '奥林匹克森林公园'
    }
}).then(function (data) {
    assert.equal(data.status, 0);
    console.dir(data.results[0]);
}).catch(function (err) {
    console.error(err);
});
