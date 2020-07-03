var cluster;
try {
  cluster = require('cluster');
} catch(e) {
  // cluster module is not present.
  cluster = null
}
if (cluster) {
  // Then provide some functionality for a cluster-aware version of Node.js
} else {
  // and some alternative for a cluster-unaware version.
}
