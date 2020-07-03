const session = require('express-session');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

app.use('/graphql', graphqlHTTP({
  schema: MySessionAwareGraphQLSchema,
  graphiql: true
}));
