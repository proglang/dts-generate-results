const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParametersByPath( '/project1' )
    .then( (parameters) => {

		// parameters contains an array of parameter objects
    });
