J$.iids = {"9":[1,14,1,21],"17":[1,22,1,33],"25":[1,14,1,34],"33":[1,14,1,34],"41":[1,14,1,34],"49":[2,1,2,7],"57":[4,16,4,19],"65":[5,18,5,21],"73":[6,17,6,20],"81":[3,14,7,6],"89":[2,15,8,2],"97":[2,1,8,3],"99":[2,1,2,14],"105":[2,1,8,4],"113":[9,1,9,7],"121":[9,1,9,16],"123":[9,1,9,14],"129":[9,1,9,17],"137":[1,1,10,1],"145":[1,1,10,1],"153":[1,1,10,1],"161":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var format = require('pg-format');\nformat.config({\n    pattern: {\n        ident: 'V',\n        literal: 'C',\n        string: 't'\n    }\n});\nformat.config(); // reset to default\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'format', format, 0);
            var format = J$.X1(41, J$.W(33, 'format', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'pg-format', 21, false)), format, 3));
            J$.X1(105, J$.M(97, J$.R(49, 'format', format, 1), 'config', 0)(J$.T(89, {
                pattern: J$.T(81, {
                    ident: J$.T(57, 'V', 21, false),
                    literal: J$.T(65, 'C', 21, false),
                    string: J$.T(73, 't', 21, false)
                }, 11, false)
            }, 11, false)));
            J$.X1(129, J$.M(121, J$.R(113, 'format', format, 1), 'config', 0)());
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
