var Remarkable = require('remarkable');
var md = new Remarkable({
  typographer: true,
  quotes: '“”‘’'
});

// Disable rules at all:
md.core.ruler.disable([ 'replacements', 'smartquotes' ]);

// Actual default replacements:
//
// '' → ‘’
// "" → “”. Set '«»' for Russian, '„“' for German, empty to disable
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
