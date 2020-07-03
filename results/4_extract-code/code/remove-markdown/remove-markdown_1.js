const removeMd = require('remove-markdown');
const markdown = '# This is a heading\n\nThis is a paragraph with [a link](http://www.disney.com/) in it.';
const plainText = removeMd(markdown); // plainText is now 'This is a heading\n\nThis is a paragraph with a link in it.'
