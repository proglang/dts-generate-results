const theo = require("theo");

theo.registerFormat(
  "array.js",
  `
  // Source: {{stem meta.file}}
  module.exports = [
    {{#each props as |prop|}}
      {{#if prop.comment}}{{{commoncomment prop.comment}}}{{/if}}
      ['{{camelcase prop.name}}', '{{prop.value}}'],
    {{/each}}
  ]
`
);
