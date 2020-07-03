J$.iids = {"9":[1,17,1,24],"17":[1,25,1,40],"25":[1,17,1,41],"33":[1,17,1,41],"41":[1,17,1,41],"49":[2,13,2,25],"57":[2,32,2,41],"65":[2,32,2,43],"73":[2,13,2,44],"75":[2,13,2,31],"81":[2,13,2,44],"89":[2,13,2,44],"97":[4,1,4,6],"105":[4,7,4,8],"113":[4,1,4,9],"121":[4,1,4,10],"129":[7,1,7,6],"137":[7,7,7,8],"145":[7,1,7,9],"153":[7,1,7,10],"161":[10,1,10,6],"169":[10,7,10,8],"177":[10,1,10,9],"185":[10,1,10,10],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"225":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var dirnameRe = require('dirname-regex');\nvar match = 'a/b/c/d.md'.match(dirnameRe());\n\nmatch[0];\n//=> 'a/b/c/d.md'\n\nmatch[1];\n//=> 'a/b/c/'\n\nmatch[2];\n//=> 'a/b/c'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'dirnameRe', dirnameRe, 0);
            J$.N(209, 'match', match, 0);
            var dirnameRe = J$.X1(41, J$.W(33, 'dirnameRe', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'dirname-regex', 21, false)), dirnameRe, 3));
            var match = J$.X1(89, J$.W(81, 'match', J$.M(73, J$.T(49, 'a/b/c/d.md', 21, false), 'match', 0)(J$.F(65, J$.R(57, 'dirnameRe', dirnameRe, 1), 0)()), match, 3));
            J$.X1(121, J$.G(113, J$.R(97, 'match', match, 1), J$.T(105, 0, 22, false), 4));
            J$.X1(153, J$.G(145, J$.R(129, 'match', match, 1), J$.T(137, 1, 22, false), 4));
            J$.X1(185, J$.G(177, J$.R(161, 'match', match, 1), J$.T(169, 2, 22, false), 4));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
