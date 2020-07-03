var types = require('pg').types
var moment = require('moment')
var TIMESTAMPTZ_OID = 1184
var TIMESTAMP_OID = 1114
var parseFn = function(val) {
   return val === null ? null : moment(val)
}
types.setTypeParser(TIMESTAMPTZ_OID, parseFn)
types.setTypeParser(TIMESTAMP_OID, parseFn)
