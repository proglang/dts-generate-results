J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,16,3,23],"33":[3,24,3,39],"41":[3,16,3,40],"49":[3,16,3,40],"57":[3,16,3,40],"65":[5,1,5,8],"73":[5,13,5,21],"81":[5,22,5,28],"89":[5,30,5,36],"97":[5,13,5,37],"105":[5,1,5,38],"107":[5,1,5,12],"113":[5,1,5,38],"121":[6,1,6,8],"129":[6,13,6,21],"137":[6,22,6,26],"145":[6,28,6,34],"153":[6,13,6,35],"161":[6,1,6,36],"163":[6,1,6,12],"169":[6,1,6,36],"177":[1,1,7,1],"185":[1,1,7,1],"193":[1,1,7,1],"201":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"'use strict';\n\nvar required = require('requires-port');\n\nconsole.log(required('8080', 'http')) // true\nconsole.log(required('80', 'http'))   // false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'required', required, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var required = J$.X1(57, J$.W(49, 'required', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'requires-port', 21, false)), required, 3));
            J$.X1(113, J$.M(105, J$.R(65, 'console', console, 2), 'log', 0)(J$.F(97, J$.R(73, 'required', required, 1), 0)(J$.T(81, '8080', 21, false), J$.T(89, 'http', 21, false))));
            J$.X1(169, J$.M(161, J$.R(121, 'console', console, 2), 'log', 0)(J$.F(153, J$.R(129, 'required', required, 1), 0)(J$.T(137, '80', 21, false), J$.T(145, 'http', 21, false))));
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