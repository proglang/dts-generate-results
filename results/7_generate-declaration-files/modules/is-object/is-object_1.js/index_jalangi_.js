J$.iids = {"9":[1,16,1,23],"17":[1,24,1,35],"25":[1,16,1,36],"33":[1,16,1,36],"41":[1,16,1,36],"49":[2,14,2,21],"57":[2,22,2,30],"65":[2,14,2,31],"73":[2,14,2,31],"81":[2,14,2,31],"89":[4,1,4,7],"97":[4,14,4,22],"105":[4,23,4,27],"113":[4,14,4,28],"121":[4,30,4,35],"129":[4,1,4,36],"131":[4,1,4,13],"137":[4,1,4,37],"145":[5,1,5,7],"153":[5,14,5,22],"161":[5,23,5,25],"169":[5,14,5,26],"177":[5,28,5,32],"185":[5,1,5,33],"187":[5,1,5,13],"193":[5,1,5,34],"201":[1,1,6,1],"209":[1,1,6,1],"217":[1,1,6,1],"225":[1,1,6,1],"233":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isObject = require('is-object');\nvar assert = require('assert');\n\nassert.equal(isObject(null), false);\nassert.equal(isObject({}), true);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(209, 'isObject', isObject, 0);
            J$.N(217, 'assert', assert, 0);
            var isObject = J$.X1(41, J$.W(33, 'isObject', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-object', 21, false)), isObject, 3));
            var assert = J$.X1(81, J$.W(73, 'assert', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'assert', 21, false)), assert, 3));
            J$.X1(137, J$.M(129, J$.R(89, 'assert', assert, 1), 'equal', 0)(J$.F(113, J$.R(97, 'isObject', isObject, 1), 0)(J$.T(105, null, 25, false)), J$.T(121, false, 23, false)));
            J$.X1(193, J$.M(185, J$.R(145, 'assert', assert, 1), 'equal', 0)(J$.F(169, J$.R(153, 'isObject', isObject, 1), 0)(J$.T(161, {}, 11, false)), J$.T(177, true, 23, false)));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
