define(function(require) {
  var Random = require("random");
  return new Random.Random(Random.MersenneTwister19937.autoSeed());
});

define(function(require) {
  var Random = require("random");
  return new Random.Random();
});

define(["random"], function(Random) {
  return new Random.Random(Random.MersenneTwister19937.autoSeed());
});
