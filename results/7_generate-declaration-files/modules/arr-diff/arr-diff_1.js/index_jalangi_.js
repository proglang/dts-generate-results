J$.iids = {"9":[1,12,1,19],"17":[1,20,1,30],"25":[1,12,1,31],"33":[1,12,1,31],"41":[1,12,1,31],"49":[3,10,3,13],"57":[3,15,3,18],"65":[3,20,3,23],"73":[3,25,3,28],"81":[3,9,3,29],"89":[3,9,3,29],"97":[3,9,3,29],"105":[4,10,4,13],"113":[4,15,4,18],"121":[4,9,4,19],"129":[4,9,4,19],"137":[4,9,4,19],"145":[6,1,6,8],"153":[6,13,6,17],"161":[6,18,6,19],"169":[6,21,6,22],"177":[6,13,6,23],"185":[6,1,6,24],"187":[6,1,6,12],"193":[6,1,6,24],"201":[1,1,8,1],"209":[1,1,8,1],"217":[1,1,8,1],"225":[1,1,8,1],"233":[1,1,8,1],"241":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var diff = require('arr-diff');\n\nvar a = ['a', 'b', 'c', 'd'];\nvar b = ['b', 'c'];\n\nconsole.log(diff(a, b))\n//=> ['a', 'd']\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(209, 'diff', diff, 0);
            J$.N(217, 'a', a, 0);
            J$.N(225, 'b', b, 0);
            var diff = J$.X1(41, J$.W(33, 'diff', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'arr-diff', 21, false)), diff, 3));
            var a = J$.X1(97, J$.W(89, 'a', J$.T(81, [
                J$.T(49, 'a', 21, false),
                J$.T(57, 'b', 21, false),
                J$.T(65, 'c', 21, false),
                J$.T(73, 'd', 21, false)
            ], 10, false), a, 3));
            var b = J$.X1(137, J$.W(129, 'b', J$.T(121, [
                J$.T(105, 'b', 21, false),
                J$.T(113, 'c', 21, false)
            ], 10, false), b, 3));
            J$.X1(193, J$.M(185, J$.R(145, 'console', console, 2), 'log', 0)(J$.F(177, J$.R(153, 'diff', diff, 1), 0)(J$.R(161, 'a', a, 1), J$.R(169, 'b', b, 1))));
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
