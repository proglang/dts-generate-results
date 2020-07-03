const commandLineCommands = require('command-line-commands')

const validCommands = [ null, 'clean', 'update', 'install' ]
const { command, argv } = commandLineCommands(validCommands)

/* print the command and remaining command-line args */
console.log('command: %s', command)
console.log('argv:    %s', JSON.stringify(argv))
