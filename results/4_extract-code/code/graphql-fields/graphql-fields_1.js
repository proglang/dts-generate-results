const graphqlFields = require('graphql-fields');
const graphql = require('graphql')

const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        profile: {type: new graphql.GraphQLObjectType({
          name: 'Profile',
          fields: {
            firstName: {type: graphql.GraphQLString},
            lastName: {type: graphql.GraphQLString},
            middleName: {type: graphql.GraphQLString},
            nickName: {type: graphql.GraphQLString},
            maidenName: {type: graphql.GraphQLString}
          }
        }),
        email: {type: graphql.GraphQLString},
        id: {type: graphql.GraphQLID}
    }
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () =>
            Object.assign({
                user: {
                    type: UserType,
                    resolve(root, args, context, info) {
                        console.log(
                            JSON.stringify(graphqlFields(info), null, 2)
                        );
                        ...
                    }
                }
            })
    })
})
