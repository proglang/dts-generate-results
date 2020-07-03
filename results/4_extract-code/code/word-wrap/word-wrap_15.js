var xmlescape = require('xml-escape');
wrap(str, {
  escape: function(string){
    return xmlescape(string);
  }
});
