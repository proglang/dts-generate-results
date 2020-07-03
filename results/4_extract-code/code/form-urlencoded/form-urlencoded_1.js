import formurlencoded from 'form-urlencoded';
// NOTE: form-urlencoded is recently changed to use ES6 export.
//       CommonJS environments should find form-urlencoded's 'default' property
//
// ex,
//
//   const formurlencoded = require('form-urlencoded').default;

const obj = {
  str : 'val',
  num : 0,
  arr : [3, {prop : false}, 1, null, 6],
  obj : {prop1 : null, prop2 : ['elem']}
};

console.log(formurlencoded(obj));
// str=val&num=0&arr%5B0%5D=3&arr%5B1%5D%5Bprop%5D=false
// &arr%5B2%5D=1&arr%5B3%5D=null&arr%5B4%5D=6&obj%5Bprop
// 1%5D=null&obj%5Bprop2%5D%5B0%5D=elem

console.log(formurlencoded(obj, {
  ignorenull : true,
  skipIndex : true,
  sorted : true
}));
// arr%5B%5D=3&arr%5B%5D%5Bprop%5D=false&arr%5B%5D=1&arr
// %5B%5D=6&num=0&obj%5Bprop2%5D%5B%5D=elem&str=val
