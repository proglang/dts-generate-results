// Create
var sem = require('semaphore')(capacity);

// Take
sem.take(fn[, n=1])
sem.take(n, fn)

// Leave
sem.leave([n])

// Available
sem.available([n])
