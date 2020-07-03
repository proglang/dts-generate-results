require(['jquery-param'], function (param) {
    var obj = { key1: { value1: [10, 20, 30] }, key2: '?a=b&c=d' };
    var str = param(obj);
    // => "key1[value1][]=10&key1[value1][]=20&key1[value1][]=30&key2=?a=b&c=d"
});
