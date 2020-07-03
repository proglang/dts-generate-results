var EventEmitter = require('micro-events');

var MyEventEmitter = function () {
    EventEmitter.call(this);
};

MyEventEmitter.prototype = Object.create(EventEmitter.prototype);
MyEventEmitter.prototype.constructor = MyEventEmitter;
