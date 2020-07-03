const LambdaTester = require( 'lambda-tester' );

const myHandler = require( '../index' ).handler;

describe( 'handler', function() {

	it( 'test failure', function() {

		return LambdaTester( myHandler )
			.event( { name: 'Unknown' } )
			.expectError();
	});
});
