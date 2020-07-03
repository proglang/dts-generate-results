const graphqlHTTP = require('express-graphql');

const app = express();

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

const extensions = ({ document, variables, operationName, result, context }) => {
  return {
    runTime: Date.now() - context.startTime
  }
}

app.use('/graphql', graphqlHTTP(request => {
  return {
    schema: MyGraphQLSchema,
    context: { startTime: Date.now() },
    graphiql: true,
    extensions
  };
}));
