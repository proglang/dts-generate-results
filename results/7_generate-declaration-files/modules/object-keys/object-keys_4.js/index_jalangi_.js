J$.iids = {"9":[1,12,1,19],"17":[1,20,1,33],"25":[1,12,1,34],"33":[1,12,1,34],"41":[1,12,1,34],"49":[2,14,2,21],"57":[2,22,2,30],"65":[2,14,2,31],"73":[2,14,2,31],"81":[2,14,2,31],"89":[4,5,4,9],"97":[5,5,5,9],"105":[6,5,6,9],"113":[3,11,7,2],"121":[3,11,7,2],"129":[3,11,7,2],"137":[9,1,9,7],"145":[9,18,9,22],"153":[9,23,9,26],"161":[9,18,9,27],"169":[9,30,9,33],"177":[9,35,9,38],"185":[9,40,9,43],"193":[9,29,9,44],"201":[9,1,9,45],"203":[9,1,9,17],"209":[9,1,9,46],"217":[1,1,10,1],"225":[1,1,10,1],"233":[1,1,10,1],"241":[1,1,10,1],"249":[1,1,10,1],"257":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var keys = require('object-keys');\nvar assert = require('assert');\nvar obj = {\n\ta: true,\n\tb: true,\n\tc: true\n};\n\nassert.deepEqual(keys(obj), ['a', 'b', 'c']);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(225, 'keys', keys, 0);
            J$.N(233, 'assert', assert, 0);
            J$.N(241, 'obj', obj, 0);
            var keys = J$.X1(41, J$.W(33, 'keys', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'object-keys', 21, false)), keys, 3));
            var assert = J$.X1(81, J$.W(73, 'assert', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'assert', 21, false)), assert, 3));
            var obj = J$.X1(129, J$.W(121, 'obj', J$.T(113, {
                a: J$.T(89, true, 23, false),
                b: J$.T(97, true, 23, false),
                c: J$.T(105, true, 23, false)
            }, 11, false), obj, 3));
            J$.X1(209, J$.M(201, J$.R(137, 'assert', assert, 1), 'deepEqual', 0)(J$.F(161, J$.R(145, 'keys', keys, 1), 0)(J$.R(153, 'obj', obj, 1)), J$.T(193, [
                J$.T(169, 'a', 21, false),
                J$.T(177, 'b', 21, false),
                J$.T(185, 'c', 21, false)
            ], 10, false)));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
