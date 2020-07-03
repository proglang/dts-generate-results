var levenshtein = require('fast-levenshtein');

var distance = levenshtein.get('back', 'book');   // 2
var distance = levenshtein.get('我愛你', '我叫你');   // 1
