var nanp = require('nanp');

nanp("(937) 252 1234");         // returns true
nanp("1 (937) 252 1234");       // returns true
nanp("937.252.1234");           // returns true
nanp("1.937.252.1234");         // returns true
nanp("9372521234");             // returns true
nanp("19372521234");            // returns true

nanp("234-911-5678");           // returns false
nanp("123-234-5678");           // returns false
nanp("911");                    // returns false

