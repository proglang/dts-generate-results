J$.iids = {"9":[1,12,1,19],"17":[1,20,1,33],"25":[1,12,1,34],"33":[1,12,1,43],"35":[1,12,1,41],"41":[1,12,1,43],"49":[1,12,1,43],"57":[2,9,2,13],"65":[2,14,2,17],"73":[2,9,2,18],"81":[2,9,2,18],"89":[2,9,2,18],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"121":[1,1,3,1],"129":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rand = require('random-seed').create();\nvar n = rand(100); // generate a random number between 0 - 99\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(97, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(105, 'rand', rand, 0);
            J$.N(113, 'n', n, 0);
            var rand = J$.X1(49, J$.W(41, 'rand', J$.M(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-seed', 21, false)), 'create', 0)(), rand, 3));
            var n = J$.X1(89, J$.W(81, 'n', J$.F(73, J$.R(57, 'rand', rand, 1), 0)(J$.T(65, 100, 22, false)), n, 3));
        } catch (J$e) {
            J$.Ex(121, J$e);
        } finally {
            if (J$.Sr(129)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
