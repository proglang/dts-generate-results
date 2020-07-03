if (command === null) {
  const minimist = require('minimist')

  // pass in the `argv` returned by `commandLineCommands()``
  const options = minimist(argv)

  if (options.version) {
    console.log('version 1.0.1')
  }
}
