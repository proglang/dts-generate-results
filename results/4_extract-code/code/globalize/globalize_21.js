var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );
Globalize( "en" ).cldr.attributes.maxLanguageId;
// > "en-Latn-US"
