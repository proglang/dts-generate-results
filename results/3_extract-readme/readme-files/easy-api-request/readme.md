# easy-api-request

Request wrapper providing header and cookie forwarding with express.
Will add the request creation function to the 'request' object.

## Usage

Configure the wrapper for a specific api
	
	var apiRequest = require('easy-api-request');
	apiRequest.create({
		name: 'testAPI',
		config: {
			url: 'http://example.com', // baseUrl for requests
			
			internal: true, //If true then all x- headers are forwarded
			
			jSend: true, //If we are expecting jSend formatted response
			
			headers: [], //Headers we want to proxy from request object
			
			cookies: [], //Cookies we want to proxy from request object
			
			replyCookies: [], //Cookies we want to proxy from reply
			
			opts: {}, //Options for request.defaults
			
			cleanLogData: Function // Gets the opts object before request is made 
			// and should return a cloned/masked object
			// by default masks password and cc names
		}
	});

A function will be added to the request object under the specified name, that function takes one boolean parameter, which
specifies if the returned request wrapper should return the stream object or not upon request.

Examples of use

	// As promise
	app.get('/', function (req, res) {
		req.testAPI()
			.get('/cool/path')
			.then(function (resp) {
				res.json(resp);
			})
			.catch(function (err) {
				res.json(err);
			});
	});
	
	// With callback
	app.get('/', function (req, res) {
    req.testAPI().get('/cool/path', function (err, resp) {
      if(err) {
        console.error(err);
      }
      res.json(err || resp);
    });
  });

	// As stream
	app.get('/', function (req, res) {
    req.testAPI(true).get('/cool/path').pipe(res);
  });
  
	// With custom requestOpts 
	app.get('/', function (req, res) {
	
	  req.testAPI(false, {
		headers: {
				'x-custom-path': req.path
			}
		})
    .get('/cool/path')
    .then(function (resp) {
      res.json(resp);
    })
    .catch(function (err) {
      res.json(err);
    });
	});


## License

The MIT License (MIT)
Copyright (c) 2015 Karl Düüna

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.