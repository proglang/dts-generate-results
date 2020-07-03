var levenshtein = require('fast-levenshtein');

levenshtein.get('mikailovitch', 'Mikhaïlovitch', { useCollator: true});
// 1
