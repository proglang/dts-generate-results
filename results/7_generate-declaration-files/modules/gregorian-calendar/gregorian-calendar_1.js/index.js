var GregorianCalendar = require('gregorian-calendar');
var date = new GregorianCalendar(require('gregorian-calendar/lib/locale/zh_CN')); // defaults to en_US
date.setTime(+new Date());
console.log(date.getDayOfWeek());
