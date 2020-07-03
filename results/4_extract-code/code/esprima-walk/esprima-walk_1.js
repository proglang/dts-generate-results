var esprima = require( 'esprima' )
var walk = require( 'esprima-walk' )

var ast = esprima.parse( '"orange"' )

ast => {
    type: 'Program',
    body: [
        {
            type: 'ExpressionStatement',
            expression: {
                type: 'Literal',
                value: 'orange',
                raw: '"orange"'
            }
        }
    ]
}

var types = []

walk( ast, function ( node ) { types.push( node.type ) } )

types => [ 'Program', 'ExpressionStatement', 'Literal' ]
