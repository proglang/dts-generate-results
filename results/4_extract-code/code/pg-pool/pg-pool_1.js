var Pool = require('pg-pool')

// by default the pool uses the same
// configuration as whatever `pg` version you have installed
var pool = new Pool()

// you can pass properties to the pool
// these properties are passed unchanged to both the node-postgres Client constructor
// and the node-pool (https://github.com/coopernurse/node-pool) constructor
// allowing you to fully configure the behavior of both
var pool2 = new Pool({
  database: 'postgres',
  user: 'brianc',
  password: 'secret!',
  port: 5432,
  ssl: true,
  max: 20, // set pool max size to 20
  min: 4, // set min pool size to 4
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
})

//you can supply a custom client constructor
//if you want to use the native postgres client
var NativeClient = require('pg').native.Client
var nativePool = new Pool({ Client: NativeClient })

//you can even pool pg-native clients directly
var PgNativeClient = require('pg-native')
var pgNativePool = new Pool({ Client: PgNativeClient })
