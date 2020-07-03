JavaScript autosuggest engine for ANTLR4 grammars
=================================================
Oran Epelbaum

[<img src="https://travis-ci.org/oranoran/antlr4-autosuggest-js.svg?branch=master">](https://travis-ci.org/oranoran/antlr4-autosuggest-js ) [<img src="https://api.codacy.com/project/badge/Grade/b5195e72e90043f79d9c3cbf7e80bd1e">](https://www.codacy.com/app/oranoran/antlr4-autosuggest-js?utm_content=oranoran/antlr4-autosuggest-js&utm_campaign=Badge_Grade ) [![npm version](https://badge.fury.io/js/antlr4-autosuggest.svg)](https://badge.fury.io/js/antlr4-autosuggest) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b5195e72e90043f79d9c3cbf7e80bd1e)](https://www.codacy.com/app/oranoran/antlr4-autosuggest-js)

Getting the antlr-autosuggest JavaScript Module
-----------------------------------------------
```bash
npm install --save antlr4-autosuggest
```

Example
-------

```javascript
// Load the lexer and parser modules generated by antlr4
const lexerModule = require('./myGrammarLexer');
const parserModule = require('./myGrammarParser');

// Create an autosuggester, providing it with the lexer and parser classes
const autosuggest = require('antlr4-autosuggest');
const autosuggester = autosuggest.autosuggester(lexerModule.myGrammarLexer, parserModule.myGrammarParser);

// Suggest completions for the string "ABC"
let suggestions = autosuggester.autosuggest("ABC");
```

Advanced Features
-----------------

### Case Preference

Sometimes grammars support both uppercase and lowercase tokens, but completions are expected in just uppercase or lowercase. Specify an `UPPER` or `LOWER` case preference to limit suggestions to just uppercase or lowercase:

```javascript
const autosuggester = autosuggest.autosuggester(lexerModule.myGrammarLexer, parserModule.myGrammarParser, 'LOWER');
```


How It Works
------------
See explanation in the [Java project](https://github.com/oranoran/antlr4-autosuggest/).

Building & Contributing
-----------------------
To get started:
* Clone the antlr-autosuggest-js repository.
* Install Node and NPM (tested with 8)
* Run the command `npm test`.

Code contributions are most welcome, but need to maintain a high bar of code cleanliness and test coverage. At a minimum, before submitting a pull request, please run `npm test` and `npm run-script lint` to verify that your changes didn't break anything.

It's very important for grammar-related features and fixes to be covered by focused, narrow unit tests. Each unit test must include a short grammar, an even shorter input text, and an expected list of auto-complete suggestions. Unfortunately it's not really possible to write such tests directly in JavaScript, because antlr4's JavaScript engine requires test grammars to have their code generated in advance (i.e., it doesn't provide a runtime grammar interpreter).

To overcome this limitation and write good tests, we actually start out by coding and testing on the [Java project](https://github.com/oranoran/antlr4-autosuggest/) first. In Java, antlr4 *does* offer an interpreter, and therefore unit tests are [pretty neat](https://github.com/oranoran/antlr4-autosuggest/blob/master/src/test/java/com/intigua/antlr4/autosuggest/AutoSuggesterTest.java)! Once the code and tests are ready in Java, we port the tests automatically to JavaScript with code generation, using the [make_js.py](https://github.com/oranoran/antlr4-autosuggest/blob/master/make_js.py) utility. The resulting JavaScript tests also looks [quite neat](https://github.com/oranoran/antlr4-autosuggest-js/blob/master/spec/generatedTestsFromJava.spec.js) despite being completely auto-generated. In the spirit of [TDD](https://en.wikipedia.org/wiki/Test-driven_development#Test-driven_development_cycle), once we have failing tests in JavaScript, we manually port the code changes that fix them from Java.

Credits
-------
Written by Oran Epelbaum at Intigua.
When starting to write this, studied the following blog posts (though much has changed since):

* [RAPID7](https://blog.rapid7.com/2015/06/29/how-to-implement-antlr4-autocomplete/): How to Implement ANTLR4 Autocomplete
* [TOMASETTI](https://tomassetti.me/autocompletion-editor-antlr/): Building autocompletion for an editor based on ANTLR by Federico Tomassetti