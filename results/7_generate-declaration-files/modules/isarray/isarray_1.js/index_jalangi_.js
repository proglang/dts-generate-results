J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[3,1,3,8],"57":[3,13,3,20],"65":[3,21,3,23],"73":[3,13,3,24],"81":[3,1,3,25],"83":[3,1,3,12],"89":[3,1,3,26],"97":[4,1,4,8],"105":[4,13,4,20],"113":[4,21,4,23],"121":[4,13,4,24],"129":[4,1,4,25],"131":[4,1,4,12],"137":[4,1,4,26],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isArray = require('isarray');\n\nconsole.log(isArray([])); // => true\nconsole.log(isArray({})); // => false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'isArray', isArray, 0);
            var isArray = J$.X1(41, J$.W(33, 'isArray', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'isarray', 21, false)), isArray, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'isArray', isArray, 1), 0)(J$.T(65, [], 10, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.F(121, J$.R(105, 'isArray', isArray, 1), 0)(J$.T(113, {}, 11, false))));
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
