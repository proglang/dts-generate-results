const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: 'mongodb://host:27017/database',
  file: (req, file) => {
    if (file.mimetype === 'image/jpeg') {
      return {
        bucketName: 'photos'
      };
    } else {
      return null;
    }
  }
});
const upload = multer({ storage });
