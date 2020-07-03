# NeDB Logger

NeDB Logger is a logger that writes object and JSON messages to a datafile readable by <a href="https://github.com/louischatriot/nedb" target="_blank">NeDB</a>, with minimal RAM footprint since it doesn't keep a cache of the database in memory. Use it when your application doesn't need to use the database capabilities of NeDB, just the logging ones. You can then use NeDB to query and modify your database.


## API
```javascript
var Logger = require('nedb-logger')
  , logger = new Logger({ filename: "path/to/datafile" });

logger.insert({ hello: "world", number: 42, timestamp: new Date() }, function (err) {
  // err will not be null if the object is not well formatted for NeDB
  // meaning one of the keys contains a dot or begins with a dollar sign
});

// You can insert arrays of documents
// The callback is optional
logger.insert([{ planet: "earth" }, { planet: "Mars" }]);

```


## License 

(The MIT License)

Copyright (c) 2013 Louis Chatriot &lt;louis.chatriot@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
