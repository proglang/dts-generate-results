const { Parser } = require('json2csv');

const fields = ['carModel', 'price', 'items.name', 'items.color', 'items.items.position', 'items.items.color'];
const myCars = [
  {
    "carModel": "BMW",
    "price": 15000,
    "items": [
      {
        "name": "airbag",
        "color": "white"
      }, {
        "name": "dashboard",
        "color": "black"
      }
    ]
  }, {
    "carModel": "Porsche",
    "price": 30000,
    "items": [
      {
        "name": "airbag",
        "items": [
          {
            "position": "left",
            "color": "white"
          }, {
            "position": "right",
            "color": "gray"
          }
        ]
      }, {
        "name": "dashboard",
        "items": [
          {
            "position": "left",
            "color": "gray"
          }, {
            "position": "right",
            "color": "black"
          }
        ]
      }
    ]
  }
];

const json2csvParser = new Parser({ fields, unwind: ['items', 'items.items'] });
const csv = json2csvParser.parse(myCars);

console.log(csv);
