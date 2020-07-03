var async = require('async');

module.exports = {
    id: 'parallel-query',

    up : function(db, cb){
        async.parallel(
            [
                function(cb){db.collection('testcollection').insert({ name: 'initial-parallel-setup' }, cb)},
                function(cb){db.collection('testcollection').insert({ name: 'second-parallel-setup' }, cb)},
                function(cb){db.collection('testcollection').insert({ name: 'third-parallel-setup' }, cb)}
            ],
            cb
        );
    }
}
