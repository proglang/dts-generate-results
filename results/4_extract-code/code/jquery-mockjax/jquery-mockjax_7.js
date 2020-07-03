var jquery = require('jquery');
var mockjax = require('jquery-mockjax')(jquery, window);
// Note that we expect `window` to be defined once this file is browserified and
// used in a browser. If it isn't Mockjax will have a problem!

mockjax({
    url: '/resource',
    responseText: 'content'
});

function getResource(cb) {
    jquery.ajax({
        url: '/resource',
        success: cb,
        error: cb
    });
}
