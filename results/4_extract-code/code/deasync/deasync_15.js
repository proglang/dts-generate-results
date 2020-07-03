var done = false;
var data;
asyncFunction(p1,function cb(res){
    data = res;
    done = true;
});
require('deasync').loopWhile(function(){return !done;});
// data is now populated
