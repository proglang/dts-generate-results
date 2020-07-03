var arraySort = require('array-sort');

var posts = [
  { path: 'c.md', locals: { date: '2014-01-09' } },
  { path: 'a.md', locals: { date: '2014-01-02' } },
  { path: 'b.md', locals: { date: '2013-05-06' } },
];

// sort by `locals.date`
console.log(arraySort(posts, 'locals.date'));

// sort by `path`
console.log(arraySort(posts, 'path'));
