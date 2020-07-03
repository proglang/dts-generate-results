const newman = require('newman');

newman.run({
    collection: '/path/to/collection.json',
    reporters: ['cli', 'html']
}, process.exit);
