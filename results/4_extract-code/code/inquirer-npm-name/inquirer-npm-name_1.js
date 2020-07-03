var inquirer = require('inquirer');
var askName = require('inquirer-npm-name');

askName(
  {
    name: 'name',
    message: 'Some Module Name' // Default: 'Module Name'
  },
  inquirer
).then(function(answer) {
  console.log(answer.name);
});

// Equivalent to {name: 'name'}
askName('name', inquirer).then(function(answer) {
  console.log(answer.name);
});
