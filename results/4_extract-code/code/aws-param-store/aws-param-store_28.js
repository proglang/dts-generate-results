const awsParamStore = require( 'aws-param-store' );

let parameter = awsParamStore.getParameterSync( '/project1/my-parameter',
											{ region: 'us-east-1' } );

// Parameter info object for '/project1/my-parameter'
