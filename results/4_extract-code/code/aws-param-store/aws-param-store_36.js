const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParameters( ['/project1/my-parameter1', '/project1/my-parameter2'],
							 { region: 'us-east-1' } )
    .then( (results) => {

        // results.Parameters will contain an array of parameters that were found
		// results.InvalidParameters will contain an array of parameters that were
		//                           not found
    });
