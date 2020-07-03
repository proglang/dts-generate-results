var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  plugins: [new DuplicatePackageCheckerPlugin()]
};
