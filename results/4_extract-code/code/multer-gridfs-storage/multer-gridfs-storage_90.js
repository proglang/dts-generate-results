const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: 'mongodb://host:27017/database',
  file: (req, file) => {
    return {
      filename: 'file_' + Date.now()
    };
  }
});
const upload = multer({ storage });
