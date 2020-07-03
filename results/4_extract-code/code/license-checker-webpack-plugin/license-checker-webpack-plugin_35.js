const path = require("path");
const LicenseCheckerWebpackPlugin = require("license-checker-webpack-plugin");
const template = require("lodash.template");

module.exports = {
  // ...
  plugins: [
    new LicenseCheckerWebpackPlugin({
      allow: "(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT)",
      ignore: ["@microsoft/*"],
      override: {
        "assignment@2.0.0": { licenseName: "MIT" },
        "intersection-observer@0.5.0": { licenseName: "MIT" },
        "querystring-es3@0.2.1": { licenseName: "MIT" }
      },
      emitError: true,
      outputWriter: path.resolve(__dirname, "customTemplate.ejs"),
      outputFilename: "ThirdPartyNotices.txt"
    })
  ]
};
