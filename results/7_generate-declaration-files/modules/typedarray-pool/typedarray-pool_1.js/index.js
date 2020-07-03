var pool = require("typedarray-pool")

//Allocate a buffer with at least 128 floats
var f = pool.malloc(128, "float")

// ... do stuff ...

//When done, release buffer
pool.free(f)
