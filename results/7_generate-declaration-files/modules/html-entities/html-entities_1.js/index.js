var Entities = require('html-entities').XmlEntities;

var entities = new Entities();

console.log(entities.encode('<>"\'&©®')); // &lt;&gt;&quot;&apos;&amp;©®
console.log(entities.encodeNonUTF('<>"\'&©®')); // &lt;&gt;&quot;&apos;&amp;&#169;&#174;
console.log(entities.encodeNonASCII('<>"\'&©®')); // <>"\'&©®
console.log(entities.decode('&lt;&gt;&quot;&apos;&amp;&copy;&reg;&#8710;')); // <>"'&&copy;&reg;∆
