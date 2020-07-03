var yazl = require("yazl");

var zipfile = new yazl.ZipFile();
zipfile.addFile("file1.txt", "file1.txt");
// (add only files, not directories)
zipfile.addFile("path/to/file.txt", "path/in/zipfile.txt");
// pipe() can be called any time after the constructor
zipfile.outputStream.pipe(fs.createWriteStream("output.zip")).on("close", function() {
  console.log("done");
});
// alternate apis for adding files:
zipfile.addReadStream(process.stdin, "stdin.txt");
zipfile.addBuffer(Buffer.from("hello"), "hello.txt");
// call end() after all the files have been added
zipfile.end();
