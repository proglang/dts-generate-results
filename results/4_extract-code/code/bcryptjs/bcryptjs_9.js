require.config({
    paths: { "bcrypt": "/path/to/bcrypt.js" }
});
require(["bcrypt"], function(bcrypt) {
    ...
});
