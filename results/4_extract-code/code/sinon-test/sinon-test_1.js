var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);
var assert = require('assert');

describe('my function', function() {
    var myFunc = require('./my-func');

    it('should do something', test(function(){
        var spy = this.spy(myFunc);
        myFunc(1);
        assert(spy.calledWith(1));
    })); //auto-cleanup

});
