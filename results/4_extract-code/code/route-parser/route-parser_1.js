Route = require('route-parser');
var route = new Route('/my/fancy/route/page/:page');
route.match('/my/fancy/route/page/7') // { page: 7 }
route.reverse({page: 3}) // -> '/my/fancy/route/page/3'
