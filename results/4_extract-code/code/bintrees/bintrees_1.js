var RBTree = require('bintrees').RBTree;

var tree = new RBTree(function(a, b) { return a - b; });

tree.insert(2);
tree.insert(-3);
