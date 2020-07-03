    var msgpack = require('msgpack');

    // ... get a net.Stream instance, s, from somewhere
    
    var ms = new msgpack.Stream(s);
    ms.addListener('msg', function(m) {
        sys.debug('received message: ' + sys.inspect(m));
    });
