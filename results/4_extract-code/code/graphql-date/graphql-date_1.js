var GraphQLDate = require('graphql-date')

// Use graphql-date in your GraphQL objects for Date properties
var fooType = new GraphQLObjectType({
  name: 'Foo',
  description: 'Some foo type',
  fields: {
    created: {
      type: GraphQLDate,
      description: 'Date foo was created'
    }
  }
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    foo: {
      type: fooType,
      resolve: function () {
        // ...
      },
    }
  }
})
