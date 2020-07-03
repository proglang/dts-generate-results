# easy-xapi-utils

Utility functions for easy-xapi

## isLoggedIn(role?: string)

Express middleware for checking if request is logged in and has a certain role.

	var eUtils = require('easy-xapi-utils');
	
	app.use(eUtils.isLoggedIn());
	
	// or
	
	app.use(eUtils.isLoggedIn('admin'));
	
## hasRole(role: string | string[])
  
Express middleware for checking if request is has specific role. Does not check loggedIn status

	var eUtils = require('easy-xapi-utils');
	app.use(eUtils.hasRole('guest'));

or

	var eUtils = require('easy-xapi-utils');
	app.use(eUtils.hasRole(['guest', 'user']));
	

## isLoggedOut()
  
Express middleware for checking if request is logged out and has role guest.

	var eUtils = require('easy-xapi-utils');
	app.use(eUtils.isLoggedOut());
	
## setRbac(id, opts) 

Function for createing and setting internal RBAC object. The opts are described in [`easy-rbac`](https://github.com/deadalready/easy-rbac).
  
## rbac(id) 

Function for retrieving a previously set RBAC object for use as middleware. 

	var eUtils = require('easy-xapi-utils');
	eUtils.setRbac('auth', {
		guest: {
			can: ['account:create', 'account:recover']
		},
		user: {
			can: ['password:change']
		}
	});
	
	app.post('/change-password',
		eUtils.rbac('auth').can('password:change'),
		controller.changePassword);
	
	
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
