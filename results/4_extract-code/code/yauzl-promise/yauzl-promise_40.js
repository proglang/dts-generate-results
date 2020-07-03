const Bluebird = require( 'bluebird' );
const yauzl = require( 'yauzl-promise' )
const yauzlBluebird = yauzl.usePromise( Bluebird );

const p = yauzl.open( '/path/to/file' );
console.log( p instanceof Bluebird ); // false

const p = yauzlBluebird.open( '/path/to/file' );
console.log( p instanceof Bluebird ); // true
