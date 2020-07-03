  const bunnymq = require('bunnymq')({
    host: 'amqp://localhost',
    //number of fetched messages at once on the channel
    prefetch: 5,
    //requeue put back message into the broker if consumer crashes/trigger exception
    requeue: true,
    //time between two reconnect (ms)
    timeout: 1000,
    //default timeout for RPC calls. If set to '0' there will be none.
    rpcTimeout: 1000,
    consumerSuffix: '',
    //generate a hostname so we can track this connection on the broker (rabbitmq management plugin)
    hostname: process.env.HOSTNAME || process.env.USER || uuid.v4(),
    //the transport to use to debug. if provided, bunnymq will show some logs
    transport: utils.emptyLogger
  });
