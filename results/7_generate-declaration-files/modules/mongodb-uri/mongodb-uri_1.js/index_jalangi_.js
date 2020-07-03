J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[2,11,2,87],"57":[2,11,2,87],"65":[2,11,2,87],"73":[3,17,3,27],"81":[3,34,3,37],"89":[3,17,3,38],"91":[3,17,3,33],"97":[3,17,3,38],"105":[3,17,3,38],"113":[4,1,4,8],"121":[4,13,4,17],"129":[4,28,4,37],"137":[4,39,4,43],"145":[4,45,4,46],"153":[4,13,4,47],"155":[4,13,4,27],"161":[4,1,4,48],"163":[4,1,4,12],"169":[4,1,4,49],"177":[1,1,5,1],"185":[1,1,5,1],"193":[1,1,5,1],"201":[1,1,5,1],"209":[1,1,5,1],"217":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var mongodbUri = require('mongodb-uri');\nvar uri = 'mongodb://user%3An%40me:p%40ssword@host:1234/d%40tabase?authSource=%40dmin';\nvar uriObject = mongodbUri.parse(uri);\nconsole.log(JSON.stringify(uriObject, null, 2));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'mongodbUri', mongodbUri, 0);
            J$.N(193, 'uri', uri, 0);
            J$.N(201, 'uriObject', uriObject, 0);
            var mongodbUri = J$.X1(41, J$.W(33, 'mongodbUri', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'mongodb-uri', 21, false)), mongodbUri, 3));
            var uri = J$.X1(65, J$.W(57, 'uri', J$.T(49, 'mongodb://user%3An%40me:p%40ssword@host:1234/d%40tabase?authSource=%40dmin', 21, false), uri, 3));
            var uriObject = J$.X1(105, J$.W(97, 'uriObject', J$.M(89, J$.R(73, 'mongodbUri', mongodbUri, 1), 'parse', 0)(J$.R(81, 'uri', uri, 1)), uriObject, 3));
            J$.X1(169, J$.M(161, J$.R(113, 'console', console, 2), 'log', 0)(J$.M(153, J$.R(121, 'JSON', JSON, 2), 'stringify', 0)(J$.R(129, 'uriObject', uriObject, 1), J$.T(137, null, 25, false), J$.T(145, 2, 22, false))));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
