var multiPurposeModule = require('./multi-purpose-module');

// module-function
console.log(multiPurposeModule("John", "Doe"));
// John Doe

// // module-class
var m = new multiPurposeModule("Jane", "Doe");
console.log(m.firstName + " - " + m.lastName);
// Jane - Doe

console.log(m.sayHello());
// Hello, my name is Jane Doe

// // module
console.log(multiPurposeModule.anotherFunction());
// I am another function!