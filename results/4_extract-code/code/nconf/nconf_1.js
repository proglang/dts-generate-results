config
  .argv()
  .env()
  .required([ 'STAGE']) //here you should have STAGE otherwise throw an error
  .file( 'stage', path.resolve( 'configs', 'stages', config.get( 'STAGE' ) + '.json' ) )
  .required([ 'OAUTH:redirectURL']) // here you should have OAUTH:redirectURL, otherwise throw an error
  .file( 'oauth', path.resolve( 'configs', 'oauth', config.get( 'OAUTH:MODE' ) + '.json' ) )
  .file( 'app', path.resolve( 'configs', 'app.json' ) )
  .required([ 'LOGS_MODE']) // here you should haveLOGS_MODE, otherwise throw an error
  .add( 'logs', {
    type: 'literal',
    store: require( path.resolve( 'configs', 'logs', config.get( 'LOGS_MODE' ) + '.js') )
  } )
  .defaults( defaults );
