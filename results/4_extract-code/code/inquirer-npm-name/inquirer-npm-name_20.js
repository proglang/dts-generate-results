var generators = require('yeoman-generator');
var inquirer = require('inquirer');
var askName = require('inquirer-npm-name');

module.exports = generators.Base.extend({
  prompting: function() {
    return askName(
      {
        name: 'name',
        message: 'Module Name'
      },
      this
    ).then(function(name) {
      console.log(name);
    });
  }
});
