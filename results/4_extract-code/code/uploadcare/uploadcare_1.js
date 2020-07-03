    var uploadcare = require('../lib/main')('public_key', 'private_key'),
        fs = require('fs');

    
    // handler is a callback function
    // in the form function(err, data) { // code to handle response }
    
    
    //API interaction
    uploadcare.files.info('file_id', handler);
    uploadcare.files.store('file_id', handler);
    uploadcare.files.remove('file_id', handler);
    uploadcare.groups.info('group_id', handler);

    //
    //Paginated list of files/groups info
    uploadcare.files.list({page: 1, limit: 100}, handler);
    uploadcare.groups.list({page: 1, limit: 100}, handler);

    //
    //Upload from file
    uploadcare.file.upload(fs.createReadStream(path), function(err,res){
        //Res should contain returned file ID
        console.log(err,res);
    });

    //
    //Upload from URL
    uploadcare.file.fromUrl('http://host/image/path', function(err,res){
        //Res should contain returned file ID
        console.log(err,res);
    })

