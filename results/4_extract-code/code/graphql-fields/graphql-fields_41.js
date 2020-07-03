const graphqlFields = require('graphql-fields');
const fieldsWithSubFieldsArgs = graphqlFields(info, {}, { processArguments: true });
