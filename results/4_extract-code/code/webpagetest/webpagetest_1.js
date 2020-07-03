const WebPageTest = require('webpagetest');
const wpt = new WebPageTest('www.webpagetest.org');

wpt.runTest('https://twitter.com/marcelduran', (err, data) => {
  console.log(err || data);
});
