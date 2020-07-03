const FeedMe = require('feedme');
const http = require('http');

http.get('http://www.npr.org/rss/rss.php?id=1001', (res) => {
  if (res.statusCode != 200) {
    console.error(new Error(`status code ${res.statusCode}`));
    return;
  }
  let parser = new FeedMe();
  parser.on('title', (title) => {
    console.log('title of feed is', title);
  });
  parser.on('item', (item) => {
    console.log();
    console.log('news:', item.title);
    console.log(item.description);
  });
  res.pipe(parser);
});
