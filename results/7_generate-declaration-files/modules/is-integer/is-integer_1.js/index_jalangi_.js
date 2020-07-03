J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[2,1,2,10],"57":[2,11,2,18],"65":[2,1,2,19],"73":[2,1,2,19],"81":[3,1,3,10],"89":[3,11,3,12],"97":[3,1,3,13],"105":[3,1,3,13],"113":[4,1,4,10],"121":[4,11,4,14],"129":[4,1,4,15],"137":[4,1,4,15],"145":[5,1,5,10],"153":[5,11,5,14],"161":[5,1,5,15],"169":[5,1,5,15],"177":[1,1,6,1],"185":[1,1,6,1],"193":[1,1,6,1],"201":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isInteger = require(\"is-integer\");\nisInteger(\"hello\") // -> false\nisInteger(4) // -> true\nisInteger(4.0) // -> true\nisInteger(4.1) // -> false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'isInteger', isInteger, 0);
            var isInteger = J$.X1(41, J$.W(33, 'isInteger', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "is-integer", 21, false)), isInteger, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isInteger', isInteger, 1), 0)(J$.T(57, "hello", 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'isInteger', isInteger, 1), 0)(J$.T(89, 4, 22, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'isInteger', isInteger, 1), 0)(J$.T(121, 4.0, 22, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'isInteger', isInteger, 1), 0)(J$.T(153, 4.1, 22, false)));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
