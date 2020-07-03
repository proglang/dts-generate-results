var Router = require('named-routes')();
var router = new Router();

router.add('get', '/admin/user/:id', function(req, res, next) {
    var url = router.build('admin.user.edit', {id: 2}); // /admin/user/2
}, {
    name: 'admin.user.edit'
});

//... in a request handler
router.dispatch(req);
