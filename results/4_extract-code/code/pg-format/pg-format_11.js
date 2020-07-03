var format = require('pg-format');
format.config({
    pattern: {
        ident: 'V',
        literal: 'C',
        string: 't'
    }
});
format.config(); // reset to default
