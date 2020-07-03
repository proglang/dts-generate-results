  // in your index.js:

  const express = require('express'),
        displayRoutes = require('express-routemap');

  var app = express();

  var adminRouter = require('./routes/admin');

  app.use('/admin', adminRouter);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.listen(3000, () => {
    console.log('Web server started at port 3000!');
    // HERE IS THE FUN PART:
    displayRoutes(app);

    // or use like this
    displayRoutes(app, 'route-table.log');
  });
