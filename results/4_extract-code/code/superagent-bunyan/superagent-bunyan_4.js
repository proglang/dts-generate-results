const request = require('superagent')
const bunyan  = require('bunyan')

const superagentLogger = require('superagent-bunyan')

const logger = bunyan.createLogger({name: 'my_log'})

logger.info('Hey!')

request
  .get('http://localhost:3000')
  .use(superagentLogger(logger)))
  .end((err, res) => {})

//
// should print 2 log entries
// 1 - "msg":"start of the request"
// 2 - "msg":"end of the request", this will print the statusCode and the body
//

{
  "name": "test", // LOG NAME
  "hostname": "local",
  "pid": 54073,
  "origin": "superagent", // LOG ORIGIN
  "req_id": "ix6btz2q--wyq997", // REQUEST ID
  "level": 30,
  "req": { // REQUEST
    "method": "GET",
    "url": "http://localhost:3000",
    "headers": {
      "user-agent": "node-superagent/3.3.1"
    }
  },
  "msg": "start of the request",
  "time": "2016-12-26T16:57:22.132Z",
  "v": 0
}

{
  "name": "test", // LOG NAME
  "hostname": "local",
  "pid": 54073,
  "origin": "superagent",// LOG ORIGIN
  "req_id": "ix6btz2q--wyq997", // REQUEST ID
  "level": 30,
  "res": {  // RESPONSE STATUS AND PAYLOAD
    "statusCode": 200,
    "body": "Hello World!"
  },
  "duration": 27.22063, // REQUETS DURATION
  "msg": "end of the request",
  "time": "2016-12-26T16:57:22.159Z",
  "v": 0
}

//
// setting the X-Request-ID with superagent
// and superagent-bunyan will use to set the req.id
//

request
  .get('http://localhost:3000')
  .set('X-Request-ID', uuid)
  .use(superagentLogger(logger)))
  .end((err, res) => {})
