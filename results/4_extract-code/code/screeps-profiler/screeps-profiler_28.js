const profiler = require('screeps-profiler');

class SuperOmegaCreep {
  work() {
    hiddenManagersPlaybook.delegate();
  }
}

// Each of the functions on this class will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerClass(SuperOmegaCreep, 'SuperOmegaCreep');

const gameHandlerObject = {
  handleGame: () => {
    // do some work.
  }
};

// Each of the functions on this object will be replaced with a profiler wrapper. The second parameter
// is a required label.
profiler.registerObject(gameHandlerObject, 'gameHandlerObject');

function getAllScouts() {
  return Object.keys(Game.creeps).filter(creepName => {
    const creep = Game.creeps[creepName];
    return creep.memory.role === 'scout';
  });
}

// Be sure to reassign the function, we can't alter functions that are passed.
getAllScouts = profiler.registerFN(getAllScouts, 'mySemiOptionalName');
