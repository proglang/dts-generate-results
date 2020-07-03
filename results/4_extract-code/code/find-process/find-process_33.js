const find = require('find-process');

find('name', 'nginx', true)
  .then(function (list) {
    console.log('there are %s nginx process(es)', list.length);
  });
