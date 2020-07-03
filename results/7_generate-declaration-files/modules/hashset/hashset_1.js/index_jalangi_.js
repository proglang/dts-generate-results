J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[4,19,4,26],"57":[4,15,4,28],"65":[4,15,4,28],"73":[4,15,4,28],"81":[7,19,7,26],"89":[7,27,7,30],"97":[7,15,7,31],"105":[7,15,7,31],"113":[7,15,7,31],"121":[10,19,10,26],"129":[10,27,10,30],"137":[10,32,10,35],"145":[10,37,10,40],"153":[10,15,10,41],"161":[10,15,10,41],"169":[10,15,10,41],"177":[13,19,13,26],"185":[13,27,13,28],"193":[13,30,13,33],"201":[13,36,13,37],"209":[13,35,13,38],"217":[13,15,13,39],"225":[13,15,13,39],"233":[13,15,13,39],"241":[1,1,14,1],"249":[1,1,14,1],"257":[1,1,14,1],"265":[1,1,14,1],"273":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var HashSet = require('hashset');\n\n//Create an empty hash set\nvar hashset = new HashSet();\n\n//Create a hash set an initialize it with a value 'a'\nvar hashset = new HashSet('a');\n\n//Create a hash set an initialize it with a set of values\nvar hashset = new HashSet('a', 'b', 'c');\n\n//Create a hash set an initialize it with 3 different values\nvar hashset = new HashSet(1, '1', [1]);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(241, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(249, 'HashSet', HashSet, 0);
            J$.N(257, 'hashset', hashset, 0);
            var HashSet = J$.X1(41, J$.W(33, 'HashSet', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'hashset', 21, false)), HashSet, 3));
            var hashset = J$.X1(73, J$.W(65, 'hashset', J$.F(57, J$.R(49, 'HashSet', HashSet, 1), 1)(), hashset, 3));
            var hashset = J$.X1(113, J$.W(105, 'hashset', J$.F(97, J$.R(81, 'HashSet', HashSet, 1), 1)(J$.T(89, 'a', 21, false)), hashset, 3));
            var hashset = J$.X1(169, J$.W(161, 'hashset', J$.F(153, J$.R(121, 'HashSet', HashSet, 1), 1)(J$.T(129, 'a', 21, false), J$.T(137, 'b', 21, false), J$.T(145, 'c', 21, false)), hashset, 3));
            var hashset = J$.X1(233, J$.W(225, 'hashset', J$.F(217, J$.R(177, 'HashSet', HashSet, 1), 1)(J$.T(185, 1, 22, false), J$.T(193, '1', 21, false), J$.T(209, [J$.T(201, 1, 22, false)], 10, false)), hashset, 3));
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
