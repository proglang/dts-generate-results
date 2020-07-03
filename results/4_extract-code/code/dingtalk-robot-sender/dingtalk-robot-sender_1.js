const ChatBot = require('dingtalk-robot-sender');
// 直接使用 webhook
const robot = new ChatBot({
  webhook: 'https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxxx'
});

// 组合 baseUrl 和 acceessToekn
const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  acceessToekn: 'xxxxxxxxx'
});

// 自定义 httpclient
const robot = new ChatBot({
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  acceessToekn: 'xxxxxxxxx',
  httpclient: require('urllib')
});
