const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())
app.get('/', (req, res) => {
  res.json(req.apiGateway.event)
})
