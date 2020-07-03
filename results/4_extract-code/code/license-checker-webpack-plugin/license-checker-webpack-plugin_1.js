const LicenseCheckerWebpackPlugin = require("license-checker-webpack-plugin");

module.exports = {
  // ...
  plugins: [new LicenseCheckerWebpackPlugin({ outputFilename: "ThirdPartyNotices.txt" })]
};
