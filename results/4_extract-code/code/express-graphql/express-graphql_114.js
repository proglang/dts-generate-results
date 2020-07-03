const graphqlHTTP = require('express-graphql');

graphqlHTTP.getGraphQLParams(request).then(params => {
  // do something...
})
