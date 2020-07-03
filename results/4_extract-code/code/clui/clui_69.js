var os   = require('os'),
    clui = require('clui');

var Gauge = clui.Gauge;

var total = os.totalmem();
var free = os.freemem();
var used = total - free;
var human = Math.ceil(used / 1000000) + ' MB';

console.log(Gauge(used, total, 20, total * 0.8, human));
