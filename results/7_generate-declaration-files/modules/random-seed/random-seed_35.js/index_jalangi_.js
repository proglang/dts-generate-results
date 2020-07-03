J$.iids = {"9":[1,13,1,20],"17":[1,21,1,34],"25":[1,13,1,35],"33":[1,13,1,44],"35":[1,13,1,42],"41":[2,10,2,17],"49":[2,18,2,31],"57":[2,10,2,32],"65":[2,10,2,41],"67":[2,10,2,39],"73":[1,13,1,44],"81":[1,13,1,44],"89":[2,10,2,41],"97":[2,10,2,41],"105":[3,1,3,8],"113":[3,13,3,18],"121":[3,19,3,22],"129":[3,13,3,23],"137":[3,25,3,30],"145":[3,31,3,34],"153":[3,25,3,35],"161":[3,1,3,36],"163":[3,1,3,12],"169":[3,1,3,37],"177":[1,1,4,1],"185":[1,1,4,1],"193":[1,1,4,1],"201":[1,1,4,1],"209":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rand1 = require('random-seed').create(),\n\trand2 = require('random-seed').create();\nconsole.log(rand1(100), rand2(100));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'rand1', rand1, 0);
            J$.N(193, 'rand2', rand2, 0);
            var rand1 = J$.X1(81, J$.W(73, 'rand1', J$.M(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-seed', 21, false)), 'create', 0)(), rand1, 3)), rand2 = J$.X1(97, J$.W(89, 'rand2', J$.M(65, J$.F(57, J$.R(41, 'require', require, 2), 0)(J$.T(49, 'random-seed', 21, false)), 'create', 0)(), rand2, 3));
            J$.X1(169, J$.M(161, J$.R(105, 'console', console, 2), 'log', 0)(J$.F(129, J$.R(113, 'rand1', rand1, 1), 0)(J$.T(121, 100, 22, false)), J$.F(153, J$.R(137, 'rand2', rand2, 1), 0)(J$.T(145, 100, 22, false))));
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
