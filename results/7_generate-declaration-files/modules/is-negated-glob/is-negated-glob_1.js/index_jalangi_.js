J$.iids = {"9":[1,21,1,28],"17":[1,29,1,46],"25":[1,21,1,47],"33":[1,21,1,47],"41":[1,21,1,47],"49":[3,1,3,8],"57":[3,13,3,26],"65":[3,27,3,32],"73":[3,13,3,33],"81":[3,1,3,34],"83":[3,1,3,12],"89":[3,1,3,35],"97":[6,1,6,8],"105":[6,13,6,26],"113":[6,27,6,33],"121":[6,13,6,34],"129":[6,1,6,35],"131":[6,1,6,12],"137":[6,1,6,36],"145":[9,1,9,8],"153":[9,13,9,26],"161":[9,27,9,35],"169":[9,13,9,36],"177":[9,1,9,37],"179":[9,1,9,12],"185":[9,1,9,38],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isNegatedGlob = require('is-negated-glob');\n\nconsole.log(isNegatedGlob('foo'));\n// { pattern: 'foo', negated: false }\n\nconsole.log(isNegatedGlob('!foo'));\n// { pattern: 'foo', negated: true }\n\nconsole.log(isNegatedGlob('!(foo)'));\n// extglob patterns are ignored\n// { pattern: '!(foo)', negated: false }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'isNegatedGlob', isNegatedGlob, 0);
            var isNegatedGlob = J$.X1(41, J$.W(33, 'isNegatedGlob', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-negated-glob', 21, false)), isNegatedGlob, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'isNegatedGlob', isNegatedGlob, 1), 0)(J$.T(65, 'foo', 21, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.F(121, J$.R(105, 'isNegatedGlob', isNegatedGlob, 1), 0)(J$.T(113, '!foo', 21, false))));
            J$.X1(185, J$.M(177, J$.R(145, 'console', console, 2), 'log', 0)(J$.F(169, J$.R(153, 'isNegatedGlob', isNegatedGlob, 1), 0)(J$.T(161, '!(foo)', 21, false))));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
