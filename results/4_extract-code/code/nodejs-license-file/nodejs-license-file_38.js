const licenseFile = require('nodejs-license-file');

try {
 
    const data = licenseFile.parse({
        publicKeyPath: 'path/to/key.pub',
        licenseFilePath: 'path/to/file.lic',
        template
    });
    
    console.log(data);
    
} catch (err) {
    
    console.log(err);
}
