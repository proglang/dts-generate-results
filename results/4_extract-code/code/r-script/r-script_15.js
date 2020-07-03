// example.js

var attitude = JSON.parse(
  require("fs").readFileSync("example/attitude.json", "utf8"));

R("example/ex-async.R")
  .data({df: attitude, nGroups: 3, fxn: "mean" })
  .call(function(err, d) {
    if (err) throw err;
    console.log(d);
  });
  
// [ { group: '(40,55]', rating: 46.7143, advance: 41.1429 },
//   { group: '(55,70]', rating: 64.6154, advance: 41.9231 },
//   { group: '(70,85]', rating: 77.2, advance: 45.5 } ]
