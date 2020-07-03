const pageIcon = require('page-icon');

const URL = 'https://www.facebook.com/';
pageIcon(siteUrl)
    .then(function(icon) {
        // do things with icon object
        console.log(icon);
    })
    .catch(error => {
        console.error(error);
    });
});
