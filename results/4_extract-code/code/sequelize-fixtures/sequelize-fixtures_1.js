    const sequelize_fixtures = require('sequelize-fixtures');

    //a map of [model name] : model
    //see offical example on how to load models
    //https://github.com/sequelize/express-example/blob/master/models/index.js
    const models = require('./models');

    //from file
    sequelize_fixtures.loadFile('fixtures/test_data.json', models).then(function(){
        doStuffAfterLoad();
    });

    //can use glob syntax to select multiple files
    sequelize_fixtures.loadFile('fixtures/*.json', models).then(function(){
        doStuffAfterLoad();
    });

    //array of files
    sequelize_fixtures.loadFiles(['fixtures/users.json', 'fixtures/data*.json'], models).then(function(){
        doStuffAfterLoad();
    });

    //specify file encoding (default utf8)
    sequelize_fixtures.loadFile('fixtures/*.json', models, { encoding: 'windows-1257'}).then(function(){
        doStuffAfterLoad();
    });

    //specify logging function (default console.log)
    function myLogging(defaultLog) {
        console.log('Fixtures: processing ...')
    }
    sequelize_fixtures.loadFile('fixtures/*.json', models, { log: myLogging}).then(function(){
        doStuffAfterLoad();
    });

    //load fixtures inside a transaction
    sequelize.transaction(function(tx) {
        sequelize_fixtures.loadFile('fixtures/*.json', models, { transaction: tx}).then(doStuffAfterLoad);
    });

    //apply transform for each model being loaded
    sequelize_fixtures.loadFile('fixtures/*.json', models, {
        transformFixtureDataFn: function (data) {
          if(data.createdAt
           && data.createdAt < 0) {
            data.createdAt = new Date((new Date()).getTime() + parseFloat(data.createdAt) * 1000 * 60);
          }
          return data;
        }
    }).then(function() {
        doStuffAfterLoad();
    });

    //modify each model being loaded
    sequelize_fixtures.loadFile('fixtures/*.json', models, {
        modifyFixtureDataFn: function (data) {
          if(!data.createdAt) {
            data.createdAt = new Date();
          }
          return data;
        }
    }).then(function() {
        doStuffAfterLoad();
    });

    //from array
    var fixtures = [
        {
            model: 'Foo',
            data: {
                propA: 'bar',
                propB: 1
            }
        },
        {
            model: 'Foo',
            data: {
                propA: 'baz',
                propB: 3
            }
        }
    ];
    sequelize_fixtures.loadFixtures(fixtures, models).then(function(){
        doStuffAfterLoad();
    });
