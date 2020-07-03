var winston = require('winston')
var slackWinston = require('slack-winston').Slack

var options = {
  domain: 'my-domain',
  token: 'my-slack-incoming-webhook-token',
  webhook_url: 'my-slack-incoming-webhook-url',
  channel: 'general',
  level: 'warn'
}

winston.add(slackWinston, options)
