var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN
var util = require('util')

// Constructor
function FakeLevelDOWN () {
  AbstractLevelDOWN.call(this)
}

// Our new prototype inherits from AbstractLevelDOWN
util.inherits(FakeLevelDOWN, AbstractLevelDOWN)

FakeLevelDOWN.prototype._open = function (options, callback) {
  // Initialize a memory storage object
  this._store = {}

  // Use nextTick to be a nice async citizen
  process.nextTick(callback, null, this)
}

FakeLevelDOWN.prototype._serializeKey = function (key) {
  // Safety: avoid store['__proto__'] skullduggery.
  // Below methods will receive serialized keys in their arguments.
  return '!' + key
}

FakeLevelDOWN.prototype._put = function (key, value, options, callback) {
  this._store[key] = value
  process.nextTick(callback)
}

FakeLevelDOWN.prototype._get = function (key, options, callback) {
  if (value === undefined) {
    // 'NotFound' error, consistent with LevelDOWN API
    return process.nextTick(callback, new Error('NotFound'))
  }

  process.nextTick(callback, null, value)
}

FakeLevelDOWN.prototype._del = function (key, options, callback) {
  delete this._store[key]
  process.nextTick(callback)
}
