var schemaPath = validate.errors[0].schemaPath
var R = require('ramda')

console.log( 'All evaluate to the same thing: ', R.equals(
  schema.properties.hello,
  { required: true, type: 'string' },
  R.path(schemaPath, schema),
  require('lodash').get(schema, schemaPath),
  require('jsonpointer').get(schema, [""].concat(schemaPath))
))
// All evaluate to the same thing: true
