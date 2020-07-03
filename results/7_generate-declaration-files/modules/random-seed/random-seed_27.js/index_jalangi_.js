J$.iids = {"9":[1,12,1,19],"17":[1,20,1,33],"25":[1,12,1,34],"33":[1,12,1,43],"35":[1,12,1,41],"41":[1,12,1,43],"49":[1,12,1,43],"57":[2,1,2,5],"65":[2,1,2,17],"67":[2,1,2,15],"73":[2,1,2,18],"81":[3,10,3,14],"89":[3,15,3,18],"97":[3,10,3,19],"105":[3,10,3,19],"113":[3,10,3,19],"121":[4,10,4,14],"129":[4,15,4,18],"137":[4,10,4,19],"145":[4,10,4,19],"153":[4,10,4,19],"161":[5,1,5,5],"169":[5,1,5,17],"171":[5,1,5,15],"177":[5,1,5,18],"185":[6,10,6,14],"193":[6,15,6,18],"201":[6,10,6,19],"209":[6,10,6,19],"217":[6,10,6,19],"225":[1,1,7,1],"233":[1,1,7,1],"241":[1,1,7,1],"249":[1,1,7,1],"257":[1,1,7,1],"265":[1,1,7,1],"273":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rand = require('random-seed').create();\nrand.initState();\nvar n1 = rand(100); // n1 === 58\nvar n2 = rand(100); // n2 === 26\nrand.initState();   // re-init\nvar n3 = rand(100); // n3 === 58 && n3 === n1\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'rand', rand, 0);
            J$.N(241, 'n1', n1, 0);
            J$.N(249, 'n2', n2, 0);
            J$.N(257, 'n3', n3, 0);
            var rand = J$.X1(49, J$.W(41, 'rand', J$.M(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-seed', 21, false)), 'create', 0)(), rand, 3));
            J$.X1(73, J$.M(65, J$.R(57, 'rand', rand, 1), 'initState', 0)());
            var n1 = J$.X1(113, J$.W(105, 'n1', J$.F(97, J$.R(81, 'rand', rand, 1), 0)(J$.T(89, 100, 22, false)), n1, 3));
            var n2 = J$.X1(153, J$.W(145, 'n2', J$.F(137, J$.R(121, 'rand', rand, 1), 0)(J$.T(129, 100, 22, false)), n2, 3));
            J$.X1(177, J$.M(169, J$.R(161, 'rand', rand, 1), 'initState', 0)());
            var n3 = J$.X1(217, J$.W(209, 'n3', J$.F(201, J$.R(185, 'rand', rand, 1), 0)(J$.T(193, 100, 22, false)), n3, 3));
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
