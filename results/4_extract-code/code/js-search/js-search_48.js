var stemmer = require('porter-stemmer').stemmer;

search.tokenizer =
	new JsSearch.StemmingTokenizer(
        stemmer, // Function should accept a string param and return a string
	    new JsSearch.SimpleTokenizer());
