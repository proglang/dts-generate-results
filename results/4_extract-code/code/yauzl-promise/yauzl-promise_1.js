const yauzl = require( 'yauzl-promise' );

const zipFile = await yauzl.open( '/path/to/file' );
