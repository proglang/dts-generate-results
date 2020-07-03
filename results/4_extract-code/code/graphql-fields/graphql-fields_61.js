const graphqlFields = require('graphql-fields');
const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
