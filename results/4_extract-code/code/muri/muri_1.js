 var muri = require('muri');
 var o = muri('mongodb://user:pass@local,remote:27018,japan:27019/neatdb?replicaSet=myreplset&journal=true&w=2&wtimeoutMS=50');

 console.log(o);

 { hosts: [ { host: 'local',  port: 27017 },
            { host: 'remote', port: 27018 },
            { host: 'japan',  port: 27019 } ],
   db: 'neatdb',
   options: {
     replicaSet: 'myreplset',
     journal: true,
     w: 2,
     wtimeoutMS: 50
   },
   auth: {
     user: 'user',
     pass: 'pass'
   }
 }
