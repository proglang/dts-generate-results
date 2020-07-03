J$.iids = {"9":[1,13,1,20],"17":[1,21,1,35],"25":[1,13,1,36],"33":[1,13,1,36],"41":[1,13,1,36],"49":[3,13,3,18],"57":[3,13,3,20],"65":[3,26,3,38],"73":[3,13,3,39],"75":[3,13,3,25],"81":[3,13,3,39],"89":[3,13,3,39],"97":[6,1,6,6],"105":[6,1,6,8],"113":[6,14,6,32],"121":[6,1,6,33],"123":[6,1,6,13],"129":[6,1,6,34],"137":[9,1,9,6],"145":[9,1,9,8],"153":[9,14,9,27],"161":[9,1,9,28],"163":[9,1,9,13],"169":[9,1,9,29],"177":[1,1,11,1],"185":[1,1,11,1],"193":[1,1,11,1],"201":[1,1,11,1],"209":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var regex = require('dotdir-regex');\n\nvar match = regex().exec('.git/a/b/c');\n// match[1] => '.git'\n\nregex().test('a/b/c/.gitignore');\n//=> false\n\nregex().test('a/.git/a/b/');\n//=> true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'regex', regex, 0);
            J$.N(193, 'match', match, 0);
            var regex = J$.X1(41, J$.W(33, 'regex', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'dotdir-regex', 21, false)), regex, 3));
            var match = J$.X1(89, J$.W(81, 'match', J$.M(73, J$.F(57, J$.R(49, 'regex', regex, 1), 0)(), 'exec', 0)(J$.T(65, '.git/a/b/c', 21, false)), match, 3));
            J$.X1(129, J$.M(121, J$.F(105, J$.R(97, 'regex', regex, 1), 0)(), 'test', 0)(J$.T(113, 'a/b/c/.gitignore', 21, false)));
            J$.X1(169, J$.M(161, J$.F(145, J$.R(137, 'regex', regex, 1), 0)(), 'test', 0)(J$.T(153, 'a/.git/a/b/', 21, false)));
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
