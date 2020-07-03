var data_driven = require('data-driven')

describe('Array', function() {
    describe('#indexOf()', function(){
        data_driven([{value: 0},{value: 5},{value: -2}], function() {
            it('should return -1 when the value is not present when searching for {value}', function(ctx){
                assert.equal(-1, [1,2,3].indexOf(ctx.value));
            })
        })
    })
})

