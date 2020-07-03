const voidElements = require('void-elements');

assert(!voidElements['span'], '<span> is not a void element');
assert(voidElements['img'], '<img> is a void element');
