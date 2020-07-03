var NgEmitter = require( 'nextgen-events' ) ;
var emitter = new NgEmitter() ;

// Normal listener
emitter.on( 'message' , function( message ) {
	console.log( 'Message received: ' , message ) ;
} ) ;

// One time listener:
emitter.once( 'close' , function() {
	console.log( 'Connection closed!' ) ;
} ) ;

// The error listener: if it is not defined, the error event will throw an exception
emitter.on( 'error' , function( error ) {
	console.log( 'Shit happens: ' , error ) ;
} ) ;

emitter.emit( 'message' , 'Hello world!' ) ;
// ...
