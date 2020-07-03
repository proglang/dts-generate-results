/* Non-SSL is simply App() */
require('uWebSockets.js').SSLApp({

  /* There are tons of SSL options */
  key_file_name: 'misc/key.pem',
  cert_file_name: 'misc/cert.pem',
  
}).ws('/*', {

  /* For brevity we skip the other events */
  message: (ws, message, isBinary) => {
    let ok = ws.send(message, isBinary);
  }
  
}).any('/*', (res, req) => {

  /* Let's deny all Http */
  res.end('Nothing to see here!');
  
}).listen(9001, (listenSocket) => {

  if (listenSocket) {
    console.log('Listening to port 9001');
  }
  
});
