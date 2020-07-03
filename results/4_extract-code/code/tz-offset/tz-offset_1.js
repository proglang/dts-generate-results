var tzOffset = require("tz-offset")
tzOffset.offsetOf("America/Sao_Paulo"); // 180.

tzOffset.removeOffset(new Date()); // a givend date without timezone offset.

tzOffset.timeAt(new Date(), "Europe/London"); // a given date represented in another.
