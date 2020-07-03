var kramed = require('kramed');
kramed.setOptions({
  renderer: new kramed.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(kramed('I am using __markdown__.'));
