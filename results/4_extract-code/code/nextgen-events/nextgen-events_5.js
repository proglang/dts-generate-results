var NgEmitter = require( 'nextgen-events' ) ;

function myClass()
{
	// myClass constructor code here
}

myClass.prototype = Object.create( NgEmitter.prototype ) ;
myClass.prototype.constructor = myClass ;	// restore the constructor

// define other methods for myClass...
