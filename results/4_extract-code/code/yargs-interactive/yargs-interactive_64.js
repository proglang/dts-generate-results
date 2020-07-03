const yargsInteractive = require('yargs-interactive');

const options = {
  name: {
    // prompt property if not set defaults to 'if-empty'
    type: 'input',
    describe: 'Enter your name'
  },
  likesPizza: {
    type: 'confirm',
    default: false,
    describe: 'Do you like pizza?',
    prompt: 'never' // because everyone likes pizza
  },
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then((result) => {
    // The tool will prompt questions output the answers.
    // You can opt-out options by using `prompt: 'never'`. For these properties, it
    // will use the value sent by parameter (--likesPizza) or the default value.
    // TODO: Do something with the result (e.g result.name)
    console.log(result);
  });
