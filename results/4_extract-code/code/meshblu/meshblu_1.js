var MeshbluSocketIO = require('meshblu');
var meshblu = new MeshbluSocketIO({
  resolveSrv: true,
  uuid: '78159106-41ca-4022-95e8-2511695ce64c',
  token: 'd5265dbc4576a88f8654a8fc2c4d46a6d7b85574'
})
meshblu.on('ready', function(){
  console.log('Ready to rock');
});
meshblu.connect();
