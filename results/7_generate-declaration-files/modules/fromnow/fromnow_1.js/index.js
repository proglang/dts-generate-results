var fromNow = require('fromnow');

fromNow('12/31/2010');
//=> "4 years, 10 months, 8 days, 10 hours, 15 minutes"

fromNow('2030-05-20');
//=> "14 years, 6 months, 21 days, 5 hours, 43 minutes"

fromNow('2030-05-20 14:02:47');
//=> "14 years, 6 months, 22 days, 2 hours, 44 minutes"

fromNow('Wed, 20 Nov 1912 00:00:00 GMT');
//=> "103 years, 23 days, 18 hours, 20 minutes"
