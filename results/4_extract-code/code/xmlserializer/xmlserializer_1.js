var xmlserializer = require('xmlserializer');
var html2xhtml = function (htmlString) {
    var parser = require('parse5'),
        dom = parser.parse(htmlString);

    return xmlserializer.serializeToString(dom);
};
console.log(html2xhtml('<br>'));
// => <html xmlns="http://www.w3.org/1999/xhtml"><head/><body><br/></body></html>
