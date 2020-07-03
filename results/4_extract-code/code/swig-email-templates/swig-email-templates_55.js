var EmailTemplates = require('swig-email-templates');
var templates = new EmailTemplates();
templates.render('template.html', { user: 55 }, function (err, html, text, subject) {
  // html is inlined html
  // text is text equivalent
  // subject is parsed subject template or null if not found
})
