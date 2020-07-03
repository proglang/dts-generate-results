if (command === null) {
  const commandLineArgs = require('command-line-args')
  const optionDefinitions = [
    { name: 'version', type: Boolean }
  ]

  // pass in the `argv` returned by `commandLineCommands()`
  const options = commandLineArgs(optionDefinitions, { argv })

  if (options.version) {
    console.log('version 1.0.1')
  }
}
