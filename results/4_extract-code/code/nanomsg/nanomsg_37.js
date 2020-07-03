var source = require('fs').createReadStream('filename.ext');

source.pipe(socket); //sends each chunk as a msg to socket's particular endpoint
