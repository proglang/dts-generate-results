const awsParamStore = require( 'aws-param-store' );

let results = awsParamStore.getParametersSync( ['/project1/my-parameter1', '/project1/my-parameter2'],
							     			   { region: 'us-east-1' } );

// results.Parameters will contain an array of parameters that were found
// results.InvalidParameters will contain an array of parameters that were
//                           not found
