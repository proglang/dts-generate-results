const camelCase = require("lodash/camelCase");
const path = require("path");
const theo = require("theo");

theo.registerFormat("array.js", result => {
  // "result" is an Immutable.Map
  // https://facebook.github.io/immutable-js/
  return `
    module.exports = [
      // Source: ${path.basename(result.getIn(["meta", "file"]))}
      ${result
        .get("props")
        .map(
          prop => `
        ['${camelCase(prop.get("name"))}', '${prop.get("value")}'],
      `
        )
        .toJS()}
    ]
  `;
});
