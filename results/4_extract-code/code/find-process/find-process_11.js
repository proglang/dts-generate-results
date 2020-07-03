const find = require('find-process');

find('port', 80)
  .then(function (list) {
    if (!list.length) {
      console.log('port 80 is free now');
    } else {
      console.log('%s is listening port 80', list[0].name);
    }
  })
