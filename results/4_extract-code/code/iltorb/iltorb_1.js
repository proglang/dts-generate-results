const compress = require('iltorb').compress;

// callback style
compress(input, function(err, output) {
  // ...
});

// promise style
compress(input)
  .then(output => /* ... */)
  .catch(err => /* ... */);

// async/await style
try {
  const output = await compress(input);
} catch(err) {
  // ...
}
