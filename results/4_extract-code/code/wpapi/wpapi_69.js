var WPAPI = require( 'wpapi/superagent' );
var wp = new WPAPI({
    endpoint: window.WP_API_Settings.endpoint,
    nonce: window.WP_API_Settings.nonce
});
