require.config({
  paths: {
    "cldr": "bower_components/cldrjs/dist/cldr"
  }
});

require( [ "cldr", "cldr/supplemental", "cldr/unresolved" ], function( Cldr ) {
  ...
});
