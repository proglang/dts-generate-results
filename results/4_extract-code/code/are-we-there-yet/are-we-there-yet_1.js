var TrackerGroup = require("are-we-there-yet").TrackerGroup

var top = new TrackerGroup("program")

var single = top.newItem("one thing", 100)
single.completeWork(20)

console.log(top.completed()) // 0.2

fs.stat("file", function(er, stat) {
  if (er) throw er  
  var stream = top.newStream("file", stat.size)
  console.log(top.completed()) // now 0.1 as single is 50% of the job and is 20% complete
                              // and 50% * 20% == 10%
  fs.createReadStream("file").pipe(stream).on("data", function (chunk) {
    // do stuff with chunk
  })
  top.on("change", function (name) {
    // called each time a chunk is read from "file"
    // top.completed() will start at 0.1 and fill up to 0.6 as the file is read
  })
})
