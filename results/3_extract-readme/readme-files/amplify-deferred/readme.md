# amplify-deferred
Adding jQuery Deferred support to the amplify.request component as a Node.js module

All credit for the jQuery plugin goes to [elijahmanor](https://github.com/elijahmanor/amplify-request-deferred).

In order to install it just do: **npm install amplify-deferred --save**

Once you have included this plugin a `promise` will be returned allowing you to use `$.when`, `.done()`, `.fail()`, and the other various jQuery Deferred methods.

```javascript
amplify.request( "/api/Account/Login", { userName: "laurentiu", password: "|\/|y s3cr3t!!" } )
	.done(function( data, status ) {
        console.log( data );
        console.log( status );
	}).fail(function( data, status ) {
		console.log( "Something went wrong !!" );
	});
```