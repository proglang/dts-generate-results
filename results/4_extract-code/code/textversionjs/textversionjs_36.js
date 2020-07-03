var textVersion = require("textversionjs");

var htmlText = "<h1>Lorem ipsum</h1>" +
				"<p>Lorem ipsum dolor sic amet</p>";

var styleConfig: {
	headingStyle: "hashify"
};

var plainText = textVersion(htmlText, styleConfig);
// returns
// "# Lorem ipsum
//
// Lorem ipsum dolor sic amet"

