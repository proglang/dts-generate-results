J$.iids = {"9":[1,13,1,20],"17":[1,21,1,33],"25":[1,13,1,34],"33":[1,13,1,40],"41":[1,13,1,40],"49":[1,13,1,40],"57":[3,13,3,18],"65":[3,9,3,20],"73":[3,26,3,27],"81":[3,29,3,30],"89":[3,32,3,33],"97":[3,35,3,37],"105":[3,39,3,40],"113":[3,42,3,43],"121":[3,45,3,46],"129":[3,9,3,47],"131":[3,9,3,25],"137":[3,9,3,47],"145":[3,9,3,47],"153":[4,1,4,8],"161":[4,13,4,14],"169":[4,13,4,22],"171":[4,13,4,20],"177":[4,31,4,32],"185":[4,13,4,33],"187":[4,13,4,30],"193":[4,1,4,34],"195":[4,1,4,12],"201":[4,1,4,35],"209":[1,1,6,1],"217":[1,1,6,1],"225":[1,1,6,1],"233":[1,1,6,1],"241":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Stats = require('fast-stats').Stats;\n\nvar s = new Stats().push(1, 2, 3, 10, 8, 4, 3);\nconsole.log(s.amean().toFixed(2));\n// 4.43\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'Stats', Stats, 0);
            J$.N(225, 's', s, 0);
            var Stats = J$.X1(49, J$.W(41, 'Stats', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'fast-stats', 21, false)), 'Stats', 0), Stats, 3));
            var s = J$.X1(145, J$.W(137, 's', J$.M(129, J$.F(65, J$.R(57, 'Stats', Stats, 1), 1)(), 'push', 0)(J$.T(73, 1, 22, false), J$.T(81, 2, 22, false), J$.T(89, 3, 22, false), J$.T(97, 10, 22, false), J$.T(105, 8, 22, false), J$.T(113, 4, 22, false), J$.T(121, 3, 22, false)), s, 3));
            J$.X1(201, J$.M(193, J$.R(153, 'console', console, 2), 'log', 0)(J$.M(185, J$.M(169, J$.R(161, 's', s, 1), 'amean', 0)(), 'toFixed', 0)(J$.T(177, 2, 22, false))));
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
