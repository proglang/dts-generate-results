const express = require('express');
const multer  = require('multer');

// Create a storage object with a given configuration
const storage = require('multer-gridfs-storage')({
   url: 'mongodb://yourhost:27017/database'
});

// Set multer storage engine to the newly created object
const upload = multer({ storage: storage });

const app = express()

// Upload your files as usual
const sUpload = upload.single('avatar');
app.post('/profile', sUpload, (req, res, next) => { 
    /*....*/ 
})

const arrUpload = upload.array('photos', 12);
app.post('/photos/upload', arrUpload, (req, res, next) => {
    /*....*/ 
})

const fUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', fUpload, (req, res, next) => {
    /*....*/ 
})
