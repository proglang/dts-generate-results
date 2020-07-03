:sleeping: Deprecated - No Longer Maintained :sleeping:
====
As you can tell from the lack of commits, I'm no longer maintaining this. Leaving it up as a reference, or if someone would like to carry it on as the main maintainer.

Pikaday - With Time Picker
===========

### Key Config Changes

```javascript
showTime: true
showMinutes: true
showSeconds: false
use24hour: false
incrementHourBy: 1
incrementMinuteBy: 1
incrementSecondBy: 1
autoClose: true
timeLabel: null // optional string added to left of time select
i18n: {
  en: {
    midnight: '', // Label for 0 AM
    noon: '', // Label for 12 AM
  }
}
```

### Time support added to [dbushell/Pikaday][david Pika]

This fork allows the user to specify the time along with their date. Done so by adding a couple select inputs to manipulate the date Pikaday is generating.
* Used to set time aspects of date.
* Will not change the currently selected date.
* If no date is selected, will select today. Any of the arguments may be null, and will not affect the date.


## Authors

* Owen Mead-Robins [http://www.owenmead.com/][owenmead]

[david Pika]:   https://github.com/dbushell/Pikaday                              "Pikaday"
[owenmead]:     http://owenmead.com/                                             "owenmead.com"
