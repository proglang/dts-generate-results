var clui = require('clui'),
    clc = require('cli-color'),
    Line = clui.Line;

var headers = new Line()
  .padding(2)
  .column('Column One', 20, [clc.cyan])
  .column('Column Two', 20, [clc.cyan])
  .column('Column Three', 20, [clc.cyan])
  .column('Column Four', 20, [clc.cyan])
  .fill()
  .output();

var line = new Line()
  .padding(2)
  .column((Math.random()*100).toFixed(3), 20)
  .column((Math.random()*100).toFixed(3), 20)
  .column((Math.random()*100).toFixed(3), 20)
  .column((Math.random()*100).toFixed(3), 20)
  .fill()
  .output();
