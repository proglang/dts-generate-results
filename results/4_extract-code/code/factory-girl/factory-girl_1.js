const factory = require('factory-girl').factory;
const User    = require('../models/user');

factory.define('user', User, {
  username: 'Bob',
  score: 50,
});

factory.build('user').then(user => {
  console.log(user); // => User {username: 'Bob', score: 50}
});
