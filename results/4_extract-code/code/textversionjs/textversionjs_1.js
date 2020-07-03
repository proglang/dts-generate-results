var textVersion = require("textversionjs");
var htmlText = "<html>" +
					"<body>" +
						"Lorem ipsum <a href=\"http://foo.foo\">dolor</a> sic <strong>amet</strong><br />" +
						"Lorem ipsum <img src=\"http://foo.jpg\" alt=\"foo\" /> sic <pre>amet</pre>" +
						"<p>Lorem ipsum dolor <br /> sic amet</p>" +
						"<script>" +
							"alert(\"nothing\");" +
						"</script>" +
					"</body>" +
				"</html>";

var plainText = textVersion(htmlText);
// returns
// "Lorem ipsum [dolor] (http://foo.foo) sic amet
// Lorem ipsum ![foo] (http://foo.jpg) sic amet
// Lorem ipsum dolor
// sic amet"

