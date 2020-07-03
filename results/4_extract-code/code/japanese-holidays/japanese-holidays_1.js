// デバッグ用のソースマップサポート
// 例外発生時に CoffeeScript の行番号を出すことができる
require('source-map-support').install();

// ここからが本文
var JapaneseHolidays = require('japanese-holidays');

var today = new Date();
var holiday = JapaneseHolidays.isHoliday(today);
if(holiday) {
    console.log("今日は " + holiday + " です");
} else {
    console.log("今日は祝日ではありません");
}
