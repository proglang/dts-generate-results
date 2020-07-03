var JsonDB = require('node-json-db');
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
var db = new JsonDB("myDataBase", true, false);

// This will create an array 'myarray' with the object '{obj:'test'}' at index 0
db.push("/arraytest/myarray[0]", {
    obj:'test'
}, true);

// You can retrieve a property of an object included in an array
// testString = 'test';
var testString = db.getData("/arraytest/myarray[0]/obj");

// Doing this will delete the object stored at the index 0 of the array.
// Keep in mind this won't delete the array even if it's empty.
db.delete(("/arraytest/myarray[0]");
