var template = require('marko')
    .load(require.resolve('./template.marko'));

template.render(
    {
        name: 'Frank'
    },
    function(err, html) {
        console.log('Template output: ' + html);
    });
