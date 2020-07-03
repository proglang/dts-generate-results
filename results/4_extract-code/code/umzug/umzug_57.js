var Bluebird = require('bluebird');
var redefine = require('redefine');

module.exports = redefine.Class({
  constructor: function ({ option1: 'defaultValue1' } = {}) {
    this.option1 = option1;
  },

  logMigration: function (migrationName) {
    return new Bluebird(function (resolve, reject) {
      // This function logs a migration as executed.
      // It will get called once a migration was
      // executed successfully.
    });
  },

  unlogMigration: function (migrationName) {
    return new Bluebird(function (resolve, reject) {
      // This function removes a previously logged migration.
      // It will get called once a migration has been reverted.
    });
  },

  executed: function () {
    return new Bluebird(function (resolve, reject) {
      // This function lists the names of the logged
      // migrations. It will be used to calculate
      // pending migrations. The result has to be an
      // array with the names of the migration files.
    });
  }
});
