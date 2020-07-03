var d3 = require("d3-random"),
    seedrandom = require("seedrandom"),
    random = d3.randomNormal.source(seedrandom("a22ebc7c488a3a47"))(0, 1);

random(); // 0.9744193494813501
