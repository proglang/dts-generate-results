var textVersion = require("textversionjs");
var htmlText = "<ul>" +
					"<li>Lorem</li>" +
					"<li>ipsum</li>" +
				"</ul>" +
				"<ol>" +
					"<li start=\"3\">Lorem</li>" +
					"<li>ipsum</li>" +
				"</ol>";

var styleConfig: {
	headingStyle: "indention",
	uIndentionChar: ".";
	listIndentionTabs: 2;
};

var plainText = textVersion(htmlText, styleConfig);
// returns "
// ..Lorem
// ..ipsum
// 3.Lorem
// 4.ipsum"
