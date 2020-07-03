J$.iids = {"9":[1,25,1,32],"17":[1,33,1,54],"25":[1,25,1,55],"33":[1,25,1,55],"41":[1,25,1,55],"49":[2,18,2,23],"57":[2,12,2,24],"65":[2,12,2,24],"73":[2,12,2,24],"81":[4,1,4,8],"89":[4,13,4,30],"97":[4,31,4,35],"105":[4,13,4,36],"113":[4,1,4,37],"115":[4,1,4,12],"121":[4,1,4,38],"129":[1,1,5,1],"137":[1,1,5,1],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var safeJsonStringify = require('safe-json-stringify');\nvar data = {foo: 'bar'}\n\nconsole.log(safeJsonStringify(data));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'safeJsonStringify', safeJsonStringify, 0);
            J$.N(145, 'data', data, 0);
            var safeJsonStringify = J$.X1(41, J$.W(33, 'safeJsonStringify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'safe-json-stringify', 21, false)), safeJsonStringify, 3));
            var data = J$.X1(73, J$.W(65, 'data', J$.T(57, {
                foo: J$.T(49, 'bar', 21, false)
            }, 11, false), data, 3));
            J$.X1(121, J$.M(113, J$.R(81, 'console', console, 2), 'log', 0)(J$.F(105, J$.R(89, 'safeJsonStringify', safeJsonStringify, 1), 0)(J$.R(97, 'data', data, 1))));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
