var template = require('marko').load('my-page.marko');
template.render({}, function(err, html) {
    // html will include all of the required <link> and <script> tags
});
