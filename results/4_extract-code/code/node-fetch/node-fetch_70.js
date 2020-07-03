const fileType = require('file-type');

fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
    .then(res => res.buffer())
    .then(buffer => fileType(buffer))
    .then(type => { /* ... */ });
