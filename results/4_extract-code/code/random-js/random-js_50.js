const Random = require("random-js").Random;
const random = new Random(MersenneTwister19937.autoSeed());
const value = random.integer(1, 100);
