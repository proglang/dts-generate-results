#!/usr/bin/env node

const yargsInteractive = require('yargs-interactive');
const options = {
  name: { type: 'input', default: 'A robot', describe: 'Enter your name' },
  likesPizza: { type: 'confirm', default: false, describe: 'Do you like pizza?' },
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then((result) => {
    // Your business logic goes here.
    // Get the arguments from the result
    // e.g. myCli(result.name);
      console.log(
        `\nResult is:\n`
        + `- Name: ${result.name}\n`
        + `- Likes pizza: ${result.likesPizza}\n`
      );
  });
