const awsParamStore = require( 'aws-param-store' );

awsParamStore.getParameter( '/project1/my-parameter', { region: 'us-east-1' } )
    .then( (parameter) => {

        // Parameter info object for '/project1/my-parameter'
    });
