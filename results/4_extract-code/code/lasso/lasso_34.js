var lassoLoader = require('lasso-loader');

lassoLoader.async(function(err) {
    // Any modules that are required within the scope
    // of this function will be loaded asynchronously*.
    // Lasso.js ensures that modules are only
    // loaded once from the server.
    //
    // *Modules that were included as part of the initial
    // page load will automatically be de-duped.

    if (err) {
        // Handle the case where one or more of the
        // dependencies failed to load.
    }

    var add = require('./add');
    var jquery = require('jquery');

    jquery(function() {
        $(document.body).append('2+2=' + add(2, 2));
    });
});
