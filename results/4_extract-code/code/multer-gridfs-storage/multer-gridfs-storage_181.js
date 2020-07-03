const GridFsStorage = require('multer-gridfs-storage');

// Both configurations are equivalent

const storage1 = new GridFsStorage({
    url: 'mongodb://host1:27017,host2:27017/database',
    cache: 'connections'
});

const storage2 = new GridFsStorage({
    url: 'mongodb://host2:27017,host1:27017/database',
    cache: 'connections'
});
