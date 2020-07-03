J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,1,3,13],"57":[3,1,3,15],"65":[3,21,3,31],"73":[3,1,3,32],"75":[3,1,3,20],"81":[3,1,3,33],"89":[6,1,6,13],"97":[6,1,6,15],"105":[6,21,6,28],"113":[6,1,6,29],"115":[6,1,6,20],"121":[6,1,6,30],"129":[9,1,9,13],"137":[9,1,9,15],"145":[9,21,9,31],"153":[9,1,9,32],"155":[9,1,9,20],"161":[9,1,9,33],"169":[12,1,12,13],"177":[12,1,12,15],"185":[12,21,12,33],"193":[12,1,12,34],"195":[12,1,12,20],"201":[12,1,12,35],"209":[15,1,15,13],"217":[15,1,15,15],"225":[15,21,15,39],"233":[15,1,15,40],"235":[15,1,15,20],"241":[15,1,15,41],"249":[1,1,17,1],"257":[1,1,17,1],"265":[1,1,17,1],"273":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var dotfileRegex = require('dotfile-regex');\n\ndotfileRegex().test('a/b/c.js');\n//=> false\n\ndotfileRegex().test('./git');\n//=> false\n\ndotfileRegex().test('.git/foo');\n//=> false\n\ndotfileRegex().test('.gitignore');\n//=> true\n\ndotfileRegex().test('a/b/c/.gitignore');\n//=> true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(257, 'dotfileRegex', dotfileRegex, 0);
            var dotfileRegex = J$.X1(41, J$.W(33, 'dotfileRegex', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'dotfile-regex', 21, false)), dotfileRegex, 3));
            J$.X1(81, J$.M(73, J$.F(57, J$.R(49, 'dotfileRegex', dotfileRegex, 1), 0)(), 'test', 0)(J$.T(65, 'a/b/c.js', 21, false)));
            J$.X1(121, J$.M(113, J$.F(97, J$.R(89, 'dotfileRegex', dotfileRegex, 1), 0)(), 'test', 0)(J$.T(105, './git', 21, false)));
            J$.X1(161, J$.M(153, J$.F(137, J$.R(129, 'dotfileRegex', dotfileRegex, 1), 0)(), 'test', 0)(J$.T(145, '.git/foo', 21, false)));
            J$.X1(201, J$.M(193, J$.F(177, J$.R(169, 'dotfileRegex', dotfileRegex, 1), 0)(), 'test', 0)(J$.T(185, '.gitignore', 21, false)));
            J$.X1(241, J$.M(233, J$.F(217, J$.R(209, 'dotfileRegex', dotfileRegex, 1), 0)(), 'test', 0)(J$.T(225, 'a/b/c/.gitignore', 21, false)));
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
