var Twig = require("twig"),
    express = require('express'),
    app = express();

// This section is optional and used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/', function(req, res){
  res.render('index.twig', {
    message : "Hello World"
  });
});

app.listen(9999);
