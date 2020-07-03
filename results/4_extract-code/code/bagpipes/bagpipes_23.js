var bagpipes = require('bagpipes');
var yaml = require('js-yaml');

var pipesDefs = yaml.safeLoad(fs.readFileSync('HelloWorld.yaml'));
var pipes = bagpipes.create(pipesDefs, pipesConfig);
var pipe = pipes.getPipe('HelloWorld');

// log the output to standard out
pipe.fit(function(context, cb) {
  console.log(context.output);
  cb(null, context);
});

var context = {};
pipes.play(pipe, context);
