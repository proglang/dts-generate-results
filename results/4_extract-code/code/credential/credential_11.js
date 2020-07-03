var credential = require('credential'),
  pw = credential(),
  storedHash = '{"hash":"gNofnhlBl36AdRyktwATxKoqWKa6hsIEzwCmW/YXN//7PtiJwCRbepV9fUKu0L9TJELCKoDiBy6rGM8ov7lg2yLY","salt":"yyN3KUzlr4KrKWMM2K3d2Ddxf8OTq+vkKG+mtnmQVIibxSJz8drfzkYzqcH0EM+PVKR/1nClRr/CPDuJsq+FOcIw","keyLength":66,"hashMethod":"pbkdf2","iterations":181019}',
  userInput = 'I have a really great password.';

pw.verify(storedHash, userInput, function (err, isValid) {
  var msg;
  if (err) { throw err; }
  msg = isValid ? 'Passwords match!' : 'Wrong password.';
  console.log(msg);
});
