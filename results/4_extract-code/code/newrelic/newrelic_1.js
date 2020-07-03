var newrelic = require('newrelic');
var app = require('express')();

// In Express, this lets you call newrelic from within a template.
app.locals.newrelic = newrelic;

app.get('/user/:id', function (req, res) {
  res.render('user');
});
app.listen(process.env.PORT);
