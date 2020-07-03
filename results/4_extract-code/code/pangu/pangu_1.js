const pangu = require('pangu');

const text = pangu.spacing('與PM戰鬥的人，應當小心自己不要成為PM');
// text = '與 PM 戰鬥的人，應當小心自己不要成為 PM'

pangu.spacingFile('/path/to/text.txt', (err, data) => {
  console.log(data);
});

pangu.spacingFile('/path/to/text.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const data = pangu.spacingFileSync('/path/to/text.txt');
