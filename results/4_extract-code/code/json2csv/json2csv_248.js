const { Parser } = require('json2csv');

const fields = ['carModel', 'price', 'colors'];
const myCars = [
  {
    "carModel": "Audi",
    "price": 0,
    "colors": ["blue","green","yellow"]
  }, {
    "carModel": "BMW",
    "price": 15000,
    "colors": ["red","blue"]
  }, {
    "carModel": "Mercedes",
    "price": 20000,
    "colors": "yellow"
  }, {
    "carModel": "Porsche",
    "price": 30000,
    "colors": ["green","teal","aqua"]
  }
];

const json2csvParser = new Parser({ fields, unwind: 'colors' });
const csv = json2csvParser.parse(myCars);

console.log(csv);
