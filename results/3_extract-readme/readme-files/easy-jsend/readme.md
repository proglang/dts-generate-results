# express-jsend

Module for adding [jSend standard](http://labs.omniti.com/labs/jsend) functions to express response object.

## Usage

Init

	var express = require('express');
	var jSend = require('express-jsend');
	
	jSend.init({ partial: true });
	
And then you can send response

	app.get('/', function (req, res) {
		res.success('My response');
	});
	
## Configuration

The module only has one configuration parameter 'partial'

It determines if the partial response sending functions `.partial` and `.makePartial` are added to response object or not.

## Functions

The following functions are added to the response object.

### success(data, status = 200)

Sends a success response with default status code of 200

### fail(data, status = 400) 

Sends a fail response with default status code of 400

### error(data, status = 500)

Sends an error response with default status of 500

### partial(opts, status = 206)*

This function is added with the configuration option partial

Sends a partial response to the client by specifying Content-Range header in the manner of '{start}-{end}/{count}' indicating
the range and total number of objects expected from this endpoint.

Options 

	{
    limit?: number;
    offset: number;
    count: number;
    data: any;
  }

### makePartial(opts)*

This function is added with the configuration option partial

Constructs and sends a partial response to the client by specifying Content-Range header in the manner of '{start}-{end}/{count}' indicating
the range and total number of objects expected from this endpoint.

It will use the provided 'mongoose' model to determine the total count and then send the partial response.

Options 

	{
		model:M.model<any>; <- the mongoose model
		opts: {
	    limit: number;
	    skip: number;
		};
		search: Object;
		result: any;
	}
	
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