J$.iids = {"9":[2,13,2,20],"17":[2,21,2,32],"25":[2,13,2,33],"33":[2,34,2,48],"41":[2,13,2,49],"49":[2,13,2,49],"57":[2,13,2,49],"65":[4,13,4,20],"73":[4,21,4,32],"81":[4,13,4,33],"89":[4,13,4,35],"97":[4,13,4,35],"105":[4,13,4,35],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"137":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Require with custom API key\nvar giphy = require('giphy-api')('API KEY HERE');\n// Require with the public beta key\nvar giphy = require('giphy-api')();\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'giphy', giphy, 0);
            var giphy = J$.X1(57, J$.W(49, 'giphy', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'giphy-api', 21, false)), 0)(J$.T(33, 'API KEY HERE', 21, false)), giphy, 3));
            var giphy = J$.X1(105, J$.W(97, 'giphy', J$.F(89, J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, 'giphy-api', 21, false)), 0)(), giphy, 3));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
