var eslintScope = require('eslint-scope');
var espree = require('espree');
var estraverse = require('estraverse');

var ast = espree.parse(code);
var scopeManager = eslintScope.analyze(ast);

var currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter: function(node, parent) {
        // do stuff

        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave: function(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }

        // do stuff
    }
});
