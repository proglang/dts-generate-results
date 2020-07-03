const moment = require("moment")
require("moment-strftime2").installTo(moment)

moment().strftime("%m/%d/%y %I:%M %p %Z") // => "16/09/11 09:22 AM CET"
