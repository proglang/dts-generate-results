var sanitize = require("sanitize-filename");
sanitize("file?")
// -> "file"
sanitize ("*file*")
// -> "file"
