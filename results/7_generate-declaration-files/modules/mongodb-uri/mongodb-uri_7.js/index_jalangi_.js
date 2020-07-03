J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[2,11,2,21],"57":[4,23,4,34],"65":[5,23,5,33],"73":[8,27,8,33],"81":[9,27,9,31],"89":[7,17,10,18],"97":[6,20,11,14],"105":[12,23,12,33],"113":[14,29,14,36],"121":[13,22,15,14],"129":[3,9,16,10],"137":[2,11,17,2],"139":[2,11,2,28],"145":[2,11,17,2],"153":[2,11,17,2],"161":[18,1,18,8],"169":[18,13,18,16],"177":[18,1,18,17],"179":[18,1,18,12],"185":[18,1,18,18],"193":[1,1,19,1],"201":[1,1,19,1],"209":[1,1,19,1],"217":[1,1,19,1],"225":[1,1,19,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var mongodbUri = require('mongodb-uri');\nvar uri = mongodbUri.format(\n        {\n            username: 'user:n@me',\n            password: 'p@ssword',\n            hosts: [\n                {\n                    host: 'host',\n                    port: 1234\n                }\n            ],\n            database: 'd@tabase',\n            options: {\n                authSource: '@dmin'\n            }\n        }\n);\nconsole.log(uri);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'mongodbUri', mongodbUri, 0);
            J$.N(209, 'uri', uri, 0);
            var mongodbUri = J$.X1(41, J$.W(33, 'mongodbUri', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'mongodb-uri', 21, false)), mongodbUri, 3));
            var uri = J$.X1(153, J$.W(145, 'uri', J$.M(137, J$.R(49, 'mongodbUri', mongodbUri, 1), 'format', 0)(J$.T(129, {
                username: J$.T(57, 'user:n@me', 21, false),
                password: J$.T(65, 'p@ssword', 21, false),
                hosts: J$.T(97, [J$.T(89, {
                        host: J$.T(73, 'host', 21, false),
                        port: J$.T(81, 1234, 22, false)
                    }, 11, false)], 10, false),
                database: J$.T(105, 'd@tabase', 21, false),
                options: J$.T(121, {
                    authSource: J$.T(113, '@dmin', 21, false)
                }, 11, false)
            }, 11, false)), uri, 3));
            J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.R(169, 'uri', uri, 1)));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
