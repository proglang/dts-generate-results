var express = require('express');
var app = express();

var Router = require('named-routes');
var router = new Router();
router.extendExpress(app);
router.registerAppHelpers(app);

app.get('/admin/user/:id', 'admin.user.edit', function(req, res, next){
    // for POST, PUT, DELETE, etc. replace 'get' with 'post', 'put', 'delete', etc.

    //... implementation

    // the names can also be accessed here:
    var url = app.namedRoutes.build('admin.user.edit', {id: 2}); // /admin/user/2

    // the name of the current route can be found at req.route.name
});

app.listen(3000);
