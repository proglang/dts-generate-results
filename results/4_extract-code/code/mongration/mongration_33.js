var path = require('path');

// adding bulk
mydbMigration.add([
    path.join(__dirname, './migrations-folder/1-step.js'),
    path.join(__dirname, './migrations-folder/2-step.js')
]);

// adding single
mydbMigration.add(path.join(__dirname, './migrations-folder/3-step.js'));
