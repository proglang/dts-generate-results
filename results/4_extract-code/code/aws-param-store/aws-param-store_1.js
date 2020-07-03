const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParametersByPath( '/project1/service1/production' )
    .then( (parameters) => {

        // do something here
    });
