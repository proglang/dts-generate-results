var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );
Globalize.load( require( "cldr-data" ).entireMainFor( "en", "es" ) );
Globalize.loadTimeZone( require( "iana-tz-data" ) );

Globalize("en").formatDate(new Date());
// > "11/27/2015"

Globalize("es").formatDate(new Date());
// > "27/11/2015"
