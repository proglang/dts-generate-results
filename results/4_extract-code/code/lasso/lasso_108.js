var lasso = require('lasso');
lasso.lassoPage({
        name: 'my-page',
        dependencies: [
            './foo.js',
            './bar.js',
            './baz.js',
            './qux.css'
        ]
    },
    function(err, lassoPageResult) {
        if (err) {
            console.log('Failed to lasso page: ', err);
            return;
        }

        var headHtml = lassoPageResult.getHeadHtml();
        /*
        String with a value similar to the following:
        <link rel="stylesheet" href="/static/my-page-85e3288e.css">
        */

        var bodyHtml = lassoPageResult.getBodyHtml();
        /*
        String with a value similar to the following:
        <script src="/static/bundle1-6df28666.js"></script>
        <script src="/static/bundle2-132d1091.js"></script>
        <script src="/static/my-page-1de22b65.js"></script>
        */

        // Inject the generated HTML into the <head> and <body> sections of a page...
    });
