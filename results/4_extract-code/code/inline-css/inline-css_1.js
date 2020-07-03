var inlineCss = require('inline-css');
var html = "<style>div{color:red;}</style><div/>";

inlineCss(html, options)
    .then(function(html) { console.log(html); });
