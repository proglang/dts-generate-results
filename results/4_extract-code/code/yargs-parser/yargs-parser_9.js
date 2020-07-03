var parse = require('yargs-parser')
parse(['-f', 11, '--zoom', 55].join(' '))   // <-- array to string
parse(['-f', 11, '--zoom', 55].map(String)) // <-- array of strings
