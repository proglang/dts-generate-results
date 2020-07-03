J$.iids = {"9":[1,11,1,18],"17":[1,19,1,32],"25":[1,11,1,33],"33":[1,11,1,33],"41":[1,11,1,33],"49":[4,13,4,16],"57":[4,13,4,25],"59":[4,13,4,23],"65":[4,13,4,25],"73":[4,13,4,25],"81":[5,17,5,20],"89":[5,13,5,22],"97":[5,13,5,22],"105":[5,13,5,22],"113":[6,13,6,16],"121":[6,13,6,18],"129":[6,13,6,18],"137":[6,13,6,18],"145":[10,12,10,36],"153":[10,12,10,36],"161":[10,12,10,36],"169":[11,13,11,16],"177":[11,24,11,28],"185":[11,13,11,29],"187":[11,13,11,23],"193":[11,13,11,29],"201":[11,13,11,29],"209":[12,17,12,20],"217":[12,21,12,25],"225":[12,13,12,26],"233":[12,13,12,26],"241":[12,13,12,26],"249":[13,13,13,16],"257":[13,17,13,21],"265":[13,13,13,22],"273":[13,13,13,22],"281":[13,13,13,22],"289":[1,1,14,1],"297":[1,1,14,1],"305":[1,1,14,1],"313":[1,1,14,1],"321":[1,1,14,1],"329":[1,1,14,1],"337":[1,1,14,1],"345":[1,1,14,1],"353":[1,1,14,1],"361":[1,1,14,1],"369":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var gen = require('random-seed'); // create a generator\n\n// these generators produce different numbers\nvar rand1 = gen.create(); // method 1\nvar rand2 = new gen();    // method 2\nvar rand3 = gen();        // method 3\n\n// these generators will produce\n// the same sequence of numbers\nvar seed = 'My Secret String Value';\nvar rand4 = gen.create(seed);\nvar rand5 = new gen(seed);\nvar rand6 = gen(seed);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(297, 'gen', gen, 0);
            J$.N(305, 'rand1', rand1, 0);
            J$.N(313, 'rand2', rand2, 0);
            J$.N(321, 'rand3', rand3, 0);
            J$.N(329, 'seed', seed, 0);
            J$.N(337, 'rand4', rand4, 0);
            J$.N(345, 'rand5', rand5, 0);
            J$.N(353, 'rand6', rand6, 0);
            var gen = J$.X1(41, J$.W(33, 'gen', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-seed', 21, false)), gen, 3));
            var rand1 = J$.X1(73, J$.W(65, 'rand1', J$.M(57, J$.R(49, 'gen', gen, 1), 'create', 0)(), rand1, 3));
            var rand2 = J$.X1(105, J$.W(97, 'rand2', J$.F(89, J$.R(81, 'gen', gen, 1), 1)(), rand2, 3));
            var rand3 = J$.X1(137, J$.W(129, 'rand3', J$.F(121, J$.R(113, 'gen', gen, 1), 0)(), rand3, 3));
            var seed = J$.X1(161, J$.W(153, 'seed', J$.T(145, 'My Secret String Value', 21, false), seed, 3));
            var rand4 = J$.X1(201, J$.W(193, 'rand4', J$.M(185, J$.R(169, 'gen', gen, 1), 'create', 0)(J$.R(177, 'seed', seed, 1)), rand4, 3));
            var rand5 = J$.X1(241, J$.W(233, 'rand5', J$.F(225, J$.R(209, 'gen', gen, 1), 1)(J$.R(217, 'seed', seed, 1)), rand5, 3));
            var rand6 = J$.X1(281, J$.W(273, 'rand6', J$.F(265, J$.R(249, 'gen', gen, 1), 0)(J$.R(257, 'seed', seed, 1)), rand6, 3));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
