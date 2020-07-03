var async = require('async');

module.exports = {
    id: 'my-migration-step-with-multiple-commands',
    
    up : function(db, cb){
        async.series(
            [
                function(_cb){db.collection('testcollection').insert({ name: 'initial-setup' }, _cb)},
                function(_cb){db.collection('othercollection').insert({ name: 'second-setup' }, _cb)},
                function(_cb){db.collection('othercollection').insert({ name: 'third-setup' }, _cb)}
            ],
            cb
        );  
    }
}
