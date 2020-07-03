var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

function router(app) {
  app.post('/webhooks/mailgun/*', function (req, res, next) {
    var body = req.body;

    if (!mailgun.validateWebhook(body.timestamp, body.token, body.signature)) {
      console.error('Request came, but not from Mailgun');
      res.send({ error: { message: 'Invalid signature. Are you even Mailgun?' } });
      return;
    }

    next();
  });

  app.post('/webhooks/mailgun/catchall', function (req, res) {
    // actually handle request here
  });
}
