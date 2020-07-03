const gracefulShutdown = require('http-graceful-shutdown');
...
// app: can be http, https, express, koa
server = app.listen(...);
...

// your personal cleanup function
// - must return a promise
// - the input parameter is optional (only needed if you want to
//   access the signal type inside this function)
// - this function here in this example takes one second to complete
function cleanup(signal) {
  return new Promise((resolve) => {
	console.log('... called signal: ' signal);
  	console.log('... in cleanup')
  	setTimeout(function() {
  		console.log('... cleanup finished');
  		resolve();
  	}, 1000)
  });
}

// this enables the graceful shutdown with advanced options
gracefulShutdown(server,
	{
		signals: 'SIGINT SIGTERM',
		timeout: 30000,
		development: false,
		onShutdown: cleanup,
		finally: function() {
			console.log('Server gracefulls shutted down.....')
		}
	}
);
