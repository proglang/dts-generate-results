var apiRootJSON = require( './my-endpoint-response.json' );
var site = new WPAPI({
    endpoint: 'http://my-site.com/wp-json',
    routes: apiRootJSON.routes
});

// site is now ready to be used with all methods defined in the
// my-endpoint-response.json file, with no need to wait for a Promise.

site.namespace( 'myplugin/v1' ).authors()...
