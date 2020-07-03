var sanitize = require("sanitize-filename");

// Some string that may be unsafe or invalid as a filename
var UNSAFE_USER_INPUT = "~/.\u0000ssh/authorized_keys";

// Sanitize the string to be safe for use as a filename.
var filename = sanitize(UNSAFE_USER_INPUT);
// -> "~.sshauthorized_keys"
