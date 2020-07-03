const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: 'mongodb://yourhost:27017/database',
    cache: true
});
