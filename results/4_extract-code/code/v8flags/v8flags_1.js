const v8flags = require('v8flags');

v8flags(function(err, results) {
  console.log(results);
  // [ '--use_strict',
  //   '--es5_readonly',
  //   '--es52_globals',
  //   '--harmony_typeof',
  //   '--harmony_scoping',
  //   '--harmony_modules',
  //   '--harmony_proxies',
  //   '--harmony_collections',
  //   '--harmony',
  // ...
});
