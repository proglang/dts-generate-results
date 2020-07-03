var dot = require('dot-object');

var src = {
  name: 'John',
  stuff: {
    phone: {
      brand: 'iphone',
      version: 6
    }
  }
};

var tgt = {name: 'Brandon'};

dot.copy('stuff.phone', 'wanna.haves.phone', src, tgt);

console.log(tgt);

{
  name: 'Brandon',
  wanna: {
    haves: {
      phone: {
        brand: 'iphone',
        version: 6
      }
    }
  }
}

