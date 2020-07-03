var assert = require('assert-plus');

function fooAccount(options, callback) {
    assert.object(options, 'options');
    assert.number(options.id, 'options.id');
    assert.bool(options.isManager, 'options.isManager');
    assert.string(options.name, 'options.name');
    assert.arrayOfString(options.email, 'options.email');
    assert.func(callback, 'callback');

    // Do stuff
    callback(null, {});
}
