// Load tokenizer.
var tokenizer = require( 'wink-tokenizer' );
// Create it's instance.
var myTokenizer = tokenizer();

// Tokenize a tweet.
var s = '@superman: hit me up on my email r2d2@gmail.com, 2 of us plan party🎉 tom at 3pm:) #fun';
myTokenizer.tokenize( s );
// -> [ { value: '@superman', tag: 'mention' },
//      { value: ':', tag: 'punctuation' },
//      { value: 'hit', tag: 'word' },
//      { value: 'me', tag: 'word' },
//      { value: 'up', tag: 'word' },
//      { value: 'on', tag: 'word' },
//      { value: 'my', tag: 'word' },
//      { value: 'email', tag: 'word' },
//      { value: 'r2d2@gmail.com', tag: 'email' },
//      { value: ',', tag: 'punctuation' },
//      { value: '2', tag: 'number' },
//      { value: 'of', tag: 'word' },
//      { value: 'us', tag: 'word' },
//      { value: 'plan', tag: 'word' },
//      { value: 'party', tag: 'word' },
//      { value: '🎉', tag: 'emoji' },
//      { value: 'tom', tag: 'word' },
//      { value: 'at', tag: 'word' },
//      { value: '3pm', tag: 'time' },
//      { value: ':)', tag: 'emoticon' },
//      { value: '#fun', tag: 'hashtag' } ]

// Tokenize a French sentence.
s = 'Mieux vaut prévenir que guérir:-)';
myTokenizer.tokenize( s );
// -> [ { value: 'Mieux', tag: 'word' },
//      { value: 'vaut', tag: 'word' },
//      { value: 'prévenir', tag: 'word' },
//      { value: 'que', tag: 'word' },
//      { value: 'guérir', tag: 'word' },
//      { value: ':-)', tag: 'emoticon' } ]

// Tokenize a sentence containing Hindi and English.
s = 'द्रविड़ ने टेस्ट में ३६ शतक जमाए, उनमें 21 विदेशी playground पर हैं।';
myTokenizer.tokenize( s );
// -> [ { value: 'द्रविड़', tag: 'word' },
//      { value: 'ने', tag: 'word' },
//      { value: 'टेस्ट', tag: 'word' },
//      { value: 'में', tag: 'word' },
//      { value: '३६', tag: 'number' },
//      { value: 'शतक', tag: 'word' },
//      { value: 'जमाए', tag: 'word' },
//      { value: ',', tag: 'punctuation' },
//      { value: 'उनमें', tag: 'word' },
//      { value: '21', tag: 'number' },
//      { value: 'विदेशी', tag: 'word' },
//      { value: 'playground', tag: 'word' },
//      { value: 'पर', tag: 'word' },
//      { value: 'हैं', tag: 'word' },
//      { value: '।', tag: 'punctuation' } ]
