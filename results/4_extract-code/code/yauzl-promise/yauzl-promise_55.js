const yauzlFork = require('my-yauzl-fork');
const yauzl = require( 'yauzl-promise' ).useYauzl( yauzlFork, { clone: false } );
console.log( yauzl == yauzlFork ); // true
