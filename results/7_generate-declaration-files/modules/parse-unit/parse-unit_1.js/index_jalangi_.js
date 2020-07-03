J$.iids = {"9":[1,12,1,19],"17":[1,20,1,32],"25":[1,12,1,33],"33":[1,12,1,33],"41":[1,12,1,33],"49":[4,1,4,8],"57":[4,14,4,18],"65":[4,19,4,28],"73":[4,14,4,29],"81":[4,1,4,31],"83":[4,1,4,12],"89":[4,1,4,31],"97":[1,1,5,1],"105":[1,1,5,1],"113":[1,1,5,1],"121":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var unit = require('parse-unit')\n\n//prints [50, \"gold\"]\nconsole.log( unit(\"50 gold\") ) \n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(97, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(105, 'unit', unit, 0);
            var unit = J$.X1(41, J$.W(33, 'unit', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'parse-unit', 21, false)), unit, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'unit', unit, 1), 0)(J$.T(65, "50 gold", 21, false))));
        } catch (J$e) {
            J$.Ex(113, J$e);
        } finally {
            if (J$.Sr(121)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
