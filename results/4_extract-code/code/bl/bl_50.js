const BufferList = require('bl')
    , fs         = require('fs')

var bl = new BufferList()
bl.append(Buffer.from('abcd'))
bl.append(Buffer.from('efg'))
bl.append(Buffer.from('hi'))
bl.append(Buffer.from('j'))

bl.pipe(fs.createWriteStream('gibberish.txt'))
