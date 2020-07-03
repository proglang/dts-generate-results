const { isText, isBuffer, getEncoding } = require('istextorbinary')

isText(aFilename) // returns true if a text file otherwise false, checks only filename
isText(null, aBuffer) // returns true if a text file otherwise false, checks only buffer
isText(aFilename, aBuffer) // returns true if a text file otherwise false, checks filename then buffer
isText(null, null) // returns null

isBinary(aFilename) // returns true if a binary file otherwise false, checks only filename
isBinary(null, aBuffer) // returns true if a binary file otherwise false, checks only buffer
isBinary(aFilename, aBuffer) // returns true if a binary file otherwise false, checks filename then buffer
isBinary(null, null) // returns null

getEncoding(aBuffer) // returns 'binary' if it contained non-utf8 characters, otherwise returns 'utf8'
