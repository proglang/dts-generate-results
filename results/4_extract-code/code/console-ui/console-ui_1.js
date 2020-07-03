const UI = require('console-ui')
const ui = new UI({
  inputStream: process.stdin,
  outputStream: process.stdout,
  errorStream: process.stderr,
  writeLevel: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR',
  ci: true | false
});
