const detect = require('detect-port');

/**
 * callback usage
 */

detect(port, (err, _port) => {
  if (err) {
    console.log(err);
  }

  if (port == _port) {
    console.log(`port: ${port} was not occupied`);
  } else {
    console.log(`port: ${port} was occupied, try port: ${_port}`);
  }
});

/**
 * for a yield syntax instead of callback function implement
 */

const co = require('co');

co(function *() {
  const _port = yield detect(port);

  if (port == _port) {
    console.log(`port: ${port} was not occupied`);
  } else {
    console.log(`port: ${port} was occupied, try port: ${_port}`);
  }
});

/**
 * use as a promise
 */

detect(port)
  .then(_port => {
    if (port == _port) {
      console.log(`port: ${port} was not occupied`);
    } else {
      console.log(`port: ${port} was occupied, try port: ${_port}`);
    }
  })
  .catch(err => {
    console.log(err);
  });

