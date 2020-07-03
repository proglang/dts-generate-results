const param = require('jquery-param');

let obj = { key1: 'value1', key2: [10, 20, 30] };
let str = param(obj);
// => "key1=value1&key2[]=10&key2[]=20&key2[]=30"
