var checkstyleFormatter = require('checkstyle-formatter');
var results = [
    {
        filename: 'foo.js',
        messages: [
            {
                line: 1,
                column: 2,
                severity: 'warning',
                message: 'the quick'
            },
            {
                line: 3,
                column: 4,
                severity: 'error',
                message: 'brown fox'
            }
        ]
    },
    {
        filename: 'bar.js',
        messages: [
            {
                line: 5,
                column: 6,
                severity: 'warning',
                message: 'jumped over'
            },
            {
                line: 7,
                column: 8,
                severity: 'error',
                message: 'the lazy dog'
            }
        ]
    }
];

console.log(checkstyleFormatter(results));
// <?xml version="1.0" encoding="utf-8"?>
// <checkstyle version="4.3">
// <file name="foo.js">
// <error line="1" column="2" severity="warning" message="the quick" />
// <error line="3" column="4" severity="error" message="brown fox" />
// </file>
// <file name="bar.js">
// <error line="5" column="6" severity="warning" message="jumped over" />
// <error line="7" column="8" severity="error" message="the lazy dog" />
// </file>
// </checkstyle>
