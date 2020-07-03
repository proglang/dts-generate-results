J$.iids = {"9":[1,13,1,20],"17":[1,21,1,37],"25":[1,13,1,38],"33":[1,13,1,38],"41":[1,13,1,38],"49":[2,16,2,21],"57":[2,16,2,25],"65":[2,16,2,25],"73":[2,16,2,25],"81":[3,18,3,23],"89":[3,18,3,32],"91":[3,18,3,30],"97":[3,18,3,32],"105":[3,18,3,32],"113":[4,24,4,29],"121":[4,37,4,38],"129":[4,24,4,39],"131":[4,24,4,36],"137":[4,24,4,39],"145":[4,24,4,39],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"177":[1,1,5,1],"185":[1,1,5,1],"193":[1,1,5,1],"201":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var names = require('starwars-names');\nvar allNames = names.all;\nvar randomName = names.random();\nvar threeRandomNames = names.random(3);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'names', names, 0);
            J$.N(169, 'allNames', allNames, 0);
            J$.N(177, 'randomName', randomName, 0);
            J$.N(185, 'threeRandomNames', threeRandomNames, 0);
            var names = J$.X1(41, J$.W(33, 'names', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'starwars-names', 21, false)), names, 3));
            var allNames = J$.X1(73, J$.W(65, 'allNames', J$.G(57, J$.R(49, 'names', names, 1), 'all', 0), allNames, 3));
            var randomName = J$.X1(105, J$.W(97, 'randomName', J$.M(89, J$.R(81, 'names', names, 1), 'random', 0)(), randomName, 3));
            var threeRandomNames = J$.X1(145, J$.W(137, 'threeRandomNames', J$.M(129, J$.R(113, 'names', names, 1), 'random', 0)(J$.T(121, 3, 22, false)), threeRandomNames, 3));
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
