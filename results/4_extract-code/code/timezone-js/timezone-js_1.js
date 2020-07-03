var timezoneJS = require("timezone-js");
var tzdata = require("tzdata");

var _tz = timezoneJS.timezone;
_tz.loadingScheme = _tz.loadingSchemes.MANUAL_LOAD;
_tz.loadZoneDataFromObject(tzdata);

var dt = new timezoneJS.Date(2006, 9, 29, 1, 59, 'America/Los_Angeles');
