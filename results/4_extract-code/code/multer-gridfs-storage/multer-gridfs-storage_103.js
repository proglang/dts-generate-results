const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: 'mongodb://host:27017/database',
  file: (req, file) => {
    // instead of an object a string is returned
    return 'file_' + Date.now();
  }
});
const upload = multer({ storage });
