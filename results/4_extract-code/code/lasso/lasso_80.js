var lasso = require('lasso');
lasso.configure('lasso-config.json');
lasso.lassoPage({
        name: 'my-page',
        dependencies: [
            "./style.less",
            "require-run: ./main"
        ]
    },
    function(err, lassoPageResult) {
        if (err) {
            // Handle the error
        }

        var headHtml = lassoPageResult.getHeadHtml();
        // headHtml will contain something similar to the following:
        // <link rel="stylesheet" href="static/my-page-169ab5d9.css">

        var bodyHtml = lassoPageResult.getBodyHtml();
        // bodyHtml will contain something similar to the following:
        //  <script src="static/my-page-2e3e9936.js"></script>
    });
