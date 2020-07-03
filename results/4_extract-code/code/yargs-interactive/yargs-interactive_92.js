const yargsInteractive = require('yargs-interactive');

const options = {
  name: {
    type: 'input',
    default: 'nano',
    describe: 'Enter your name'
  },
  likesPizza: {
    type: 'confirm',
    default: false,
    describe: 'Do you like pizza?'
  },
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then((result) => {
    // The tool will output the values set via parameters or
    // the default value (if not provided).
    // TODO: Do something with the result (e.g result.name)
    console.log(result);
  });
