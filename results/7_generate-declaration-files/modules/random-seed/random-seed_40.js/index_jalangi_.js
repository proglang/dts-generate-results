J$.iids = {"9":[1,12,1,25],"17":[2,10,2,17],"25":[2,18,2,31],"33":[2,10,2,32],"41":[2,40,2,44],"49":[2,10,2,45],"51":[2,10,2,39],"57":[3,10,3,17],"65":[3,18,3,31],"73":[3,10,3,32],"81":[3,40,3,44],"89":[3,10,3,45],"91":[3,10,3,39],"97":[1,12,1,25],"105":[1,12,1,25],"113":[2,10,2,45],"121":[2,10,2,45],"129":[3,10,3,45],"137":[3,10,3,45],"145":[4,1,4,8],"153":[4,13,4,18],"161":[4,19,4,22],"169":[4,13,4,23],"177":[4,25,4,30],"185":[4,31,4,34],"193":[4,25,4,35],"201":[4,1,4,36],"203":[4,1,4,12],"209":[4,1,4,37],"217":[1,1,5,1],"225":[1,1,5,1],"233":[1,1,5,1],"241":[1,1,5,1],"249":[1,1,5,1],"257":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var seed = 'Hello World',\n\trand1 = require('random-seed').create(seed),\n\trand2 = require('random-seed').create(seed);\nconsole.log(rand1(100), rand2(100));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(225, 'seed', seed, 0);
            J$.N(233, 'rand1', rand1, 0);
            J$.N(241, 'rand2', rand2, 0);
            var seed = J$.X1(105, J$.W(97, 'seed', J$.T(9, 'Hello World', 21, false), seed, 3)), rand1 = J$.X1(121, J$.W(113, 'rand1', J$.M(49, J$.F(33, J$.R(17, 'require', require, 2), 0)(J$.T(25, 'random-seed', 21, false)), 'create', 0)(J$.R(41, 'seed', seed, 1)), rand1, 3)), rand2 = J$.X1(137, J$.W(129, 'rand2', J$.M(89, J$.F(73, J$.R(57, 'require', require, 2), 0)(J$.T(65, 'random-seed', 21, false)), 'create', 0)(J$.R(81, 'seed', seed, 1)), rand2, 3));
            J$.X1(209, J$.M(201, J$.R(145, 'console', console, 2), 'log', 0)(J$.F(169, J$.R(153, 'rand1', rand1, 1), 0)(J$.T(161, 100, 22, false)), J$.F(193, J$.R(177, 'rand2', rand2, 1), 0)(J$.T(185, 100, 22, false))));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
