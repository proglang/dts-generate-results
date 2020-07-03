const decompress = require('iltorb').decompress;

// callback style
decompress(input, function(err, output) {
  // ...
});

// promise style
decompress(input)
  .then(output => /* ... */)
  .catch(err => /* ... */);

// async/await style
try {
  const output = await decompress(input);
} catch(err) {
  // ...
}
