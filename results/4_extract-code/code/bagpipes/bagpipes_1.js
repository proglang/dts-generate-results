var bagpipes = require('bagpipes');

var pipesDefs =  {
  HelloWorld: [
    { emit: 'Hello, World!' }
  ]
};

var pipesConfig = {};
var pipes = bagpipes.create(pipesDefs, pipesConfig);
var pipe = pipes.getPipe('HelloWorld');

// log the output to standard out
pipe.fit(function(context, cb) {
  console.log(context.output);
  cb(null, context);
});

var context = {};
pipes.play(pipe, context);
