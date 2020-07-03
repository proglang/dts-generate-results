var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api', { target: 'http://www.example.org' });
//                   \____/   \_____________________________/
//                     |                    |
//                   context             options

// 'apiProxy' is now ready to be used as middleware in a server.
