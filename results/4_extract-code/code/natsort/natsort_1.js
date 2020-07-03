var natsort = require('natsort');
var someArr = [2, 5, 3, 4, 1, 'a', 'B'];

someArr.sort(natsort());
someArr.sort(natsort({ desc: true }));
someArr.sort(natsort({ insensitive: true }));

// sort with object array
var objArr = [
  { val: 'B' },
  { val: 'a' },
  { val: 'D' },
  { val: 'c' }
];

var sorter = natsort();

objArr.sort(function(a, b) {
  return sorter(a.val, b.val);
});
