var xmlpoke = require('xmlpoke');

xmlpoke('**/*.xml', ...);

xmlpoke('**/*.xml', '**/*.config', ...);

xmlpoke([ '**/*.xml', '**/*.config' ], ...);

xmlpoke([ '**/*.xml', '**/*.config' ], { path: '*.proj' }, ...);

xmlpoke([ '**/*.xml', { path: '*.proj' } ], '**/*.config', ...);

xmlpoke([ 'data/*.xml', { path: '*.proj' } ], [ '**/*.config', { path: '*.xml' } ], ...);
