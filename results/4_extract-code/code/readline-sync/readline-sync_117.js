secret = readlineSync.question('Please whisper sweet words: ', {
  hideEchoBack: true,
  mask: require('chalk').magenta('\u2665')
});
