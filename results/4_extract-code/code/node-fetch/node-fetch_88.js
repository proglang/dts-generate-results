const { createReadStream } = require('fs');

const stream = createReadStream('input.txt');

fetch('https://httpbin.org/post', { method: 'POST', body: stream })
    .then(res => res.json())
    .then(json => console.log(json));
