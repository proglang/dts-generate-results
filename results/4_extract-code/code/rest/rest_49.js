var registry = require('rest/mime/registry');

registry.register('application/vnd.com.example', {
    read: function(str) {
        var obj;
        // do string to object conversions
        return obj;
    },
    write: function(obj) {
        var str;
        // do object to string conversions
        return str;
    }
});
