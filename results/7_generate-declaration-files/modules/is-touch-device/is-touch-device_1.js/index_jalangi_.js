J$.iids = {"9":[1,21,1,28],"10":[4,14,4,36],"17":[1,29,1,46],"25":[1,21,1,47],"33":[1,21,1,47],"41":[1,21,1,47],"49":[2,14,2,21],"57":[2,22,2,30],"65":[2,14,2,31],"73":[2,14,2,31],"81":[2,14,2,31],"89":[4,1,4,7],"97":[4,21,4,34],"105":[4,21,4,36],"113":[4,38,4,47],"121":[4,1,4,48],"123":[4,1,4,13],"129":[4,1,4,49],"137":[1,1,5,1],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isTouchDevice = require('is-touch-device');\nvar assert = require('assert');\n\nassert.equal(typeof isTouchDevice(), 'boolean');\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'isTouchDevice', isTouchDevice, 0);
            J$.N(153, 'assert', assert, 0);
            var isTouchDevice = J$.X1(41, J$.W(33, 'isTouchDevice', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-touch-device', 21, false)), isTouchDevice, 3));
            var assert = J$.X1(81, J$.W(73, 'assert', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'assert', 21, false)), assert, 3));
            J$.X1(129, J$.M(121, J$.R(89, 'assert', assert, 1), 'equal', 0)(J$.U(10, 'typeof', J$.F(105, J$.R(97, 'isTouchDevice', isTouchDevice, 1), 0)()), J$.T(113, 'boolean', 21, false)));
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
