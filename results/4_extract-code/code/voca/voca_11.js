var words = require('voca/words');
var slugify = require('voca/slugify');
words('welcome to Earth'); // => ['welcome', 'to', 'Earth']
slugify('caffé latté');    // => 'caffe-latte'
