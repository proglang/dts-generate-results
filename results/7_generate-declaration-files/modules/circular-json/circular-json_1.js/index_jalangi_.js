J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[4,18,4,25],"33":[4,26,4,41],"41":[4,18,4,42],"49":[5,16,5,21],"57":[5,9,5,23],"65":[4,18,4,42],"73":[4,18,4,42],"81":[5,9,5,23],"89":[5,9,5,23],"97":[9,1,9,4],"105":[9,12,9,15],"113":[9,1,9,15],"121":[9,1,9,16],"129":[10,7,10,19],"137":[10,30,10,33],"145":[10,7,10,34],"147":[10,7,10,29],"153":[10,7,10,34],"161":[10,1,10,35],"169":[1,1,11,1],"177":[1,1,11,1],"185":[1,1,11,1],"193":[1,1,11,1],"201":[1,1,11,1],"209":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"'use strict';\n\nvar\n  CircularJSON = require('circular-json'),\n  obj = { foo: 'bar' },\n  str\n;\n  \nobj.self = obj;\nstr = CircularJSON.stringify(obj);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'CircularJSON', CircularJSON, 0);
            J$.N(185, 'obj', obj, 0);
            J$.N(193, 'str', str, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var CircularJSON = J$.X1(73, J$.W(65, 'CircularJSON', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'circular-json', 21, false)), CircularJSON, 3)), obj = J$.X1(89, J$.W(81, 'obj', J$.T(57, {
                    foo: J$.T(49, 'bar', 21, false)
                }, 11, false), obj, 3)), str;
            J$.X1(121, J$.P(113, J$.R(97, 'obj', obj, 1), 'self', J$.R(105, 'obj', obj, 1), 0));
            J$.X1(161, str = J$.W(153, 'str', J$.M(145, J$.R(129, 'CircularJSON', CircularJSON, 1), 'stringify', 0)(J$.R(137, 'obj', obj, 1)), str, 2));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
