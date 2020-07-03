// デバッグ用のソースマップサポート
// 例外発生時に CoffeeScript の行番号を出すことができる
require('source-map-support').install();

// ここからが本文
var JapaneseHolidays = require('japanese-holidays');

var today = new Date();
var holidays = JapaneseHolidays.getHolidaysOf( today.getFullYear() );
holidays.forEach(function(holiday) {
    console.log(
        today.getFullYear() + "年" +
        holiday.month + "月" + 
        holiday.date + "日は " +
        holiday.name + " です"
    );
});
