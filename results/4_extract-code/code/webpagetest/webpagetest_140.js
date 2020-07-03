const WebPageTest = require('webpagetest');

const wpt = new WebPageTest('my-wpt.foo.com'); // default: www.webpagetest.org
const wptPublic = new WebPageTest('www.webpagetest.org', 'MY_API_KEY');
