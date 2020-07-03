const licenseFile = require('nodejs-license-file');

try {

    const licence = `
====BEGIN LICENSE====
1
1.0.0
Name
Last Name
some@email.com
12/10/2025
xxxxxxxxxxxxxxxxxxxxx
=====END LICENSE=====
    `;
 
    const data = licenseFile.parse({
        publicKeyPath: 'path/to/key.pub',
        licenseFile: licence,
        template
    });
    
    console.log(data);
    
} catch (err) {
    
    console.log(err);
}
