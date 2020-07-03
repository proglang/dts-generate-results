var AbstractChainedBatch = require('abstract-leveldown').AbstractChainedBatch
var inherits = require('util').inherits

function ChainedBatch (db) {
  AbstractChainedBatch.call(this, db)
}

inherits(ChainedBatch, AbstractChainedBatch)

FakeLevelDOWN.prototype._chainedBatch = function () {
  return new ChainedBatch(this)
}
