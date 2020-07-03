var isAbsolute = require('is-absolute');

isAbsolute.win32('c:\\');
isAbsolute.win32('//C://user\\docs\\Letter.txt');
isAbsolute.win32('\\\\unc\\share');
isAbsolute.win32('\\\\unc\\share\\foo');
isAbsolute.win32('\\\\unc\\share\\foo\\');
isAbsolute.win32('\\\\unc\\share\\foo\\bar');
isAbsolute.win32('\\\\unc\\share\\foo\\bar\\');
isAbsolute.win32('\\\\unc\\share\\foo\\bar\\baz');
//=> true

isAbsolute.win32('a:foo/a/b/c/d');
isAbsolute.win32(':\\');
isAbsolute.win32('foo\\bar\\baz');
isAbsolute.win32('foo\\bar\\baz\\');
//=> false
