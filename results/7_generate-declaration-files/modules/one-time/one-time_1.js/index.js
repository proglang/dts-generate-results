var one = require('one-time');

function load(file, fn) {
  fn = one(fn);

  eventemitter.once('load', fn);
  eventemitter.once('error', fn);

  // do stuff
  eventemitter.emit('error', new Error('Failed to load, but still finished'));
  eventemitter.emit('load');
}

function example(fn) {
  fn = one(fn);

  fn();
  fn('also receives all arguments');
  fn('it returns the same value') === 'bar';
  fn('never');
  fn('gonna');
  fn('give');
  fn('you');
  fn('up');
}

example(function () {
  return 'bar'
});
