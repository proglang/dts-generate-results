    grunt.initConfig({
        fixtures: {
            import_test_data: {
                src: ['fixtures/data1.json', 'fixtures/models*.json'],
                models: function () {  //returns mapping model name: model
                    return require('../models')
                },
                options: { //specify encoding, optiona. default utf-8
                    encoding: 'windows-1257'
                }
            }
        }

    });

    grunt.loadNpmTasks('sequelize-fixtures');
