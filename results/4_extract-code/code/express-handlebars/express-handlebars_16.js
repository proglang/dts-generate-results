var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// ...still have a reference to `hbs`, on which methods like `loadPartials()`
// can be called.
