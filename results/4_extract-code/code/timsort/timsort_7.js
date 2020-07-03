function numberCompare(a,b) {
    return a-b;
}

var arr = [...];
var TimSort = require('timsort');
TimSort.sort(arr, numberCompare);
