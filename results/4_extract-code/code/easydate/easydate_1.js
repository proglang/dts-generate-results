var easydate = require('easydate')

// current date/time
easydate('d-M-y') // "28-01-14"
easydate('d/M/Y') // "28/01/2014"
easydate('Y.M.d') // "2014.01.28"
easydate('M') // "01"
easydate('d-M-Y @ h:m:s.l') // "29-01-2014 @ 07:22:37.418"

// specified date/time
easydate('d-M-Y @ h:m', '2015-11-03T16:06:00.000Z') // "03-11-2015 @ 16:06"
easydate('h:m:s.l', '2015-11-03T16:06:08.123Z') // "16:06:08.123"
easydate('M~d~Y', '03-01-2017') // "03~01~2017"

// time zone (e.g. in UTC+1)
easydate('d/M/y', {setDate: '2016-10-01T00:00:00.000Z', timeZone: 'utc'}) // => "30/09/16"
easydate('d/M/y', {setDate: '2016-10-01T00:00:00.000Z', timeZone: 'local'}) // => "01/10/16"

easydate('z', {timeZone: 'utc'}) // => "UTC"
easydate('z', {timeZone: 'local'}) // => "UTC+1"

easydate('h:m:s z x', {setDate: '2016-08-01T00:00:00.000Z'}) // => "01:00:00 UTC+1 DST"
easydate('h:m:s z x', {setDate: '2016-08-01T00:00:00.000Z', adjust: true}) // => "00:00:00 UTC+1 DST"
