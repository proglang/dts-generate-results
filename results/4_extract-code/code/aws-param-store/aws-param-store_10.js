const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParametersByPath( '/project1/service1/production', { region: 'us-east-1' } )
    .then( (parameters) => {

        // do something here
    });
