var globBase = require('glob-base');

globBase('a/b/.git/');
//=> { base: 'a/b/.git/', isGlob: false, glob: '' })

globBase('a/b/**/e');
//=> { base: 'a/b', isGlob: true, glob: '**/e' }

globBase('a/b/*.{foo,bar}');
//=> { base: 'a/b', isGlob: true, glob: '*.{foo,bar}' }

globBase('a/b/.git/**');
//=> { base: 'a/b/.git', isGlob: true, glob: '**' }

globBase('a/b/c/*.md');
//=> { base: 'a/b/c', isGlob: true, glob: '*.md' }

globBase('a/b/c/.*.md');
//=> { base: 'a/b/c', isGlob: true, glob: '.*.md' }

globBase('a/b/{c,d}');
//=> { base: 'a/b', isGlob: true, glob: '{c,d}' }

globBase('!*.min.js');
//=> { base: '.', isGlob: true, glob: '!*.min.js' }

globBase('!foo');
//=> { base: '.', isGlob: true, glob: '!foo' }

globBase('!foo/(a|b).min.js');
//=> { base: '.', isGlob: true, glob: '!foo/(a|b).min.js' }

globBase('');
//=> { base: '.', isGlob: false, glob: '' }

globBase('**/*.md');
//=> { base: '.', isGlob: true, glob: '**/*.md' }

globBase('**/*.min.js');
//=> { base: '.', isGlob: true, glob: '**/*.min.js' }

globBase('**/.*');
//=> { base: '.', isGlob: true, glob: '**/.*' }

globBase('**/d');
//=> { base: '.', isGlob: true, glob: '**/d' }

globBase('*.*');
//=> { base: '.', isGlob: true, glob: '*.*' }

globBase('*.min.js');
//=> { base: '.', isGlob: true, glob: '*.min.js' }

globBase('*/*');
//=> { base: '.', isGlob: true, glob: '*/*' }

globBase('*b');
//=> { base: '.', isGlob: true, glob: '*b' }

globBase('.');
//=> { base: '.', isGlob: false, glob: '.' }

globBase('.*');
//=> { base: '.', isGlob: true, glob: '.*' }

globBase('./*');
//=> { base: '.', isGlob: true, glob: '*' }

globBase('/a');
//=> { base: '/', isGlob: false, glob: 'a' }

globBase('@(a|b)/e.f.g/');
//=> { base: '.', isGlob: true, glob: '@(a|b)/e.f.g/' }

globBase('[a-c]b*');
//=> { base: '.', isGlob: true, glob: '[a-c]b*' }

globBase('a');
//=> { base: '.', isGlob: false, glob: 'a' }

globBase('a.min.js');
//=> { base: '.', isGlob: false, glob: 'a.min.js' }

globBase('a/');
//=> { base: 'a/', isGlob: false, glob: '' }

globBase('a/**/j/**/z/*.md');
//=> { base: 'a', isGlob: true, glob: '**/j/**/z/*.md' }

globBase('a/*/c/*.md');
//=> { base: 'a', isGlob: true, glob: '*/c/*.md' }

globBase('a/?/c.md');
//=> { base: 'a', isGlob: true, glob: '?/c.md' }

globBase('a/??/c.js');
//=> { base: 'a', isGlob: true, glob: '??/c.js' }

globBase('a?b');
//=> { base: '.', isGlob: true, glob: 'a?b' }

globBase('bb');
//=> { base: '.', isGlob: false, glob: 'bb' }

globBase('c.md');
//=> { base: '.', isGlob: false, glob: 'c.md' }
