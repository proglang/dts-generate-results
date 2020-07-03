var dependencyTree = require('dependency-tree');

// Returns a dependency tree object for the given file
var tree = dependencyTree({
  filename: 'path/to/a/file',
  directory: 'path/to/all/files',
  requireConfig: 'path/to/requirejs/config', // optional
  webpackConfig: 'path/to/webpack/config', // optional
  tsConfig: 'path/to/typescript/config', // optional
  nodeModulesConfig: {
    entry: 'module'
  }, // optional
  filter: path => path.indexOf('node_modules') === -1, // optional
  nonExistent: [] // optional
});

// Returns a post-order traversal (list form) of the tree with duplicate sub-trees pruned.
// This is useful for bundling source files, because the list gives the concatenation order.
// Note: you can pass the same arguments as you would to dependencyTree()
var list = dependencyTree.toList({
  filename: 'path/to/a/file',
  directory: 'path/to/all/files'
});
