# easy-xapi

This is a module for easy creation of x-header APIs. It is a wrapper around express providing default functionality.

It uses:

* easy-jsend for jSend standards.
* easy-x-headers for header parsing
* bunyan as logger

It sets up:

* routes for favicon, robots.txt, heartbeat
* default 404 route
* default error handling that recognizes cluster state
* request logger with x-rid as req_id
* request start and end logging
* gzip compression

## Usage

	import eXapi = require('easy-xapi');
	
	eXapi.init({
	    jSend: {
	        partial: true
	    }
	});
	
	var xApi = eXapi.create({
	    root: __dirname,
	    log: {
	      name: 'test-log',
	      level: 'info'
      },
	    port: 3000,
	    name: 'test',
	    xHeadersDefaults: {
        channel: 'en'
	    },
	    mount: function (app) {
        app.get('/', function (req, res) {
          res.send('ok');
        });
	    }
	});
	
	xApi.listen();
	
## Licence

The MIT License (MIT)

Copyright (c) 2015 Karl Düüna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
