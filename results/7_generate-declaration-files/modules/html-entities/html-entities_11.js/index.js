var Entities = require('html-entities').AllHtmlEntities;

var entities = new Entities();

console.log(entities.encode('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;∆
console.log(entities.encodeNonUTF('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;&#8710;
console.log(entities.encodeNonASCII('<>"&©®∆')); // <>"&©®&#8710;
console.log(entities.decode('&lt;&gt;&quot;&amp;&copy;&reg;')); // <>"&©®
