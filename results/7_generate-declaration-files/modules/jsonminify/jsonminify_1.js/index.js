var jsonminify = require("jsonminify");

jsonminify('{"key":"value"/** comment **/}')
>> '{"key":"value"}'

JSON.minify('{"key":"value"/** comment **/}')
>> '{"key":"value"}'
