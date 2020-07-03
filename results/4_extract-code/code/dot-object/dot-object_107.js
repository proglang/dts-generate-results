var dot = require('dot-object');

var tgt = { val: 'test' };
dot.str('this.is.my.string', 'value', tgt);

console.log(tgt);

{
  "val": "test",
  "this": {
    "is": {
      "my": {
        "string": "value"
      }
    }
  }
}
