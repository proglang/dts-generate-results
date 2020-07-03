const awsParamStore = require( 'aws-param-store' );

let parameters = awsParamStore.getParametersByPathSync( '/project1' );

// parameters contains an array of parameter objects
