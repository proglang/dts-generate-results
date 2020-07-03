// get a motor-hat instance with the following initialized:
// * a non-default I2C address for the motor hat (default is 0x6F)
// * a stepper with winding one on 'M1' and winding two on 'M2' ports
// * a dc motor on port 'M4'
// * a servo on channel 0
// * a servo on channel 14
let spec = {
    address: 0x60,
    steppers: [{ W1: 'M1', W2: 'M2' }],
    dcs: ['M4'],
    servos: [0,14]
};
var motorHat = require('motor-hat')(spec);

// Since MotorHat 2.0, the instance needs to be initialized.
// This is to enable async initialization, feel free to open an issue if this is a pain.
motorHat.init();

// For steppers, set speed in rpm or pps (pulses per second) or sps (steps per second).
// To set it in rpm, set you steps/rev first (default 200)
// If you set it in pps, the speed will not be constant for different styles or number of microsteps.
motorHat.steppers[0].setSteps(2048);
motorHat.steppers[0].setSpeed({rpm:5});

// Move the motor one full turn fwds synchronously, one back async.
// step[Sync] and oneStep[Sync] take number of steps as input, 
// depending on selected style. To do 2048 full steps fwd (sync), 2048 back (async):
motorHat.steppers[0].stepSync('fwd', 2048);
motorHat.steppers[0].step('back', 2048, function(err, result) {
  if (err) {
    console.log('Oh no, there was an error');
  } else {
    // Move on..
  }
});
