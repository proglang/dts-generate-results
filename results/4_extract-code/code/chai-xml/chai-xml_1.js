var chai    = require('chai');
var expect  = require('chai').expect;
var chaiXml = require('chai-xml');

//loads the plugin
chai.use(chaiXml);

describe('assert some xml', function(){

    var someXml = '<root>\n\t<child name="foo" value="bar"></child>\n</root>';
    var otherXml = '<root><child value="bar" name="foo" /></root>';

    it("should be valid", function(){
        expect(someXml).xml.to.be.valid();
    });

    it("should be the same string as otherXml ", function(){
        expect(someXml).to.not.equal(otherXml);
    });
    it("should be the same XML as otherXml ", function(){
        expect(someXml).xml.to.equal(otherXml);
    });

    it("should be the same XML ignoring the whitespace at the begining and end of the text nodes", function () {
        var formattedXml = "<tag>\n\tContent\n</tag>";
        var unformattedXml = "<tag>Content</tag>";
        expect(formattedXml).xml.to.deep.equal(unformattedXml);
    });
});
