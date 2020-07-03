var java = require("java");
java.classpath.push("commons-lang3-3.1.jar");
java.classpath.push("commons-io.jar");

var list1 = java.newInstanceSync("java.util.ArrayList");
console.log(list1.sizeSync()); // 0
list1.addSync('item1');
console.log(list1.sizeSync()); // 1

java.newInstance("java.util.ArrayList", function(err, list2) {
  list2.addSync("item1");
  list2.addSync("item2");
  console.log(list2.toStringSync()); // [item1, item2]
});

var ArrayList = java.import('java.util.ArrayList');
var list3 = new ArrayList();
list3.addSync('item1');
list3.equalsSync(list1); // true
