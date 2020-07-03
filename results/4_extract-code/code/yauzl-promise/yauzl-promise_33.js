const Bluebird = require( 'bluebird' );
const yauzl = require( 'yauzl-promise' ).usePromise( Bluebird );

const p = yauzl.open( '/path/to/file' );
console.log( p instanceof Bluebird ); // true
