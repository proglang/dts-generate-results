var csstree = require('css-tree');
var ast = csstree.parse('.example { world: "!" }');

csstree.walk(ast, function(node) {
    if (node.type === 'ClassSelector' && node.name === 'example') {
        node.name = 'hello';
    }
});

console.log(csstree.generate(ast));
// .hello{world:"!"}
