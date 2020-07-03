var luaparse = require('luaparse'),
    events = new (require('events').EventEmitter);

Object.keys(luaparse.ast).forEach(function(type) {
  var original = luaparse.ast[type];
  luaparse.ast[type] = function() {
    var node = original.apply(null, arguments);
    events.emit(node.type, node);
    return node;
  };
});
events.on('Identifier', function(node) { console.log(node); });
luaparse.parse('i = "foo"');
