var textVersion = require("textversionjs");
var htmlText = "<p>Lorem <a href=\"http://foo.foo\">ipsum</a> dolor sic amet</p>";

var styleConfig: {
	linkStyle: function(href, linkText){
		return linkText + " " + "(" + href + ")";
	}
};

var plainText = textVersion(htmlText, styleConfig);
// returns "Lorem ipsum (http://foo.foo) dolor sic amet"

