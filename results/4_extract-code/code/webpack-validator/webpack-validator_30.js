const validate = require('webpack-validator')
const Joi = require('webpack-validator').Joi

// This joi schema will be `Joi.concat`-ed with the internal schema
const yourSchemaExtension = Joi.object({
  // this would just allow the property and doesn't perform any additional validation
  eslint: Joi.any()
})

const config = { /* ... your webpack config */ }

module.exports = validate(config, { schemaExtension: yourSchemaExtension })
