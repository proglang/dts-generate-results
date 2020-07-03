const FeedMe = require('feedme');
const http = require('http');

http.get('https://nodejs.org/en/feed/blog.xml', (res) => {
  let parser = new FeedMe(true);
  res.pipe(parser);
  parser.on('end', () => {
    console.log(parser.done());
  });
});
