J$.iids = {"9":[1,14,1,21],"17":[1,22,1,32],"25":[1,14,1,33],"33":[1,14,1,33],"41":[1,14,1,33],"49":[2,11,2,17],"57":[2,24,2,31],"65":[2,11,2,32],"67":[2,11,2,23],"73":[2,11,2,32],"81":[2,11,2,32],"89":[3,1,3,8],"97":[3,13,3,17],"105":[3,28,3,31],"113":[3,13,3,32],"115":[3,13,3,27],"121":[3,1,3,33],"123":[3,1,3,12],"129":[3,1,3,34],"137":[1,1,4,1],"145":[1,1,4,1],"153":[1,1,4,1],"161":[1,1,4,1],"169":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parser = require('luaparse');\nvar ast = parser.parse('i = 0');\nconsole.log(JSON.stringify(ast));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'parser', parser, 0);
            J$.N(153, 'ast', ast, 0);
            var parser = J$.X1(41, J$.W(33, 'parser', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'luaparse', 21, false)), parser, 3));
            var ast = J$.X1(81, J$.W(73, 'ast', J$.M(65, J$.R(49, 'parser', parser, 1), 'parse', 0)(J$.T(57, 'i = 0', 21, false)), ast, 3));
            J$.X1(129, J$.M(121, J$.R(89, 'console', console, 2), 'log', 0)(J$.M(113, J$.R(97, 'JSON', JSON, 2), 'stringify', 0)(J$.R(105, 'ast', ast, 1))));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
