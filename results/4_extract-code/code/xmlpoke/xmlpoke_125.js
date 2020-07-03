var xmlpoke = require('xmlpoke');

var cdata = new xmlpoke.CDataValue('value');
var xmlstring = new xmlpoke.XmlString('<el attr="value">hai</el>');

xmlpoke('**/*.config', function(xml) { 
    xml.set('some/path', cdata);
    xml.set('some/path', xmlstring);
});
