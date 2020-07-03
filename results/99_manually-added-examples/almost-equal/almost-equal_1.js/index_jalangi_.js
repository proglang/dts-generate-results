J$.iids = {"9":[1,19,1,26],"10":[4,9,4,20],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[3,9,3,12],"57":[3,9,3,12],"65":[3,9,3,12],"73":[4,9,4,12],"81":[4,15,4,20],"89":[4,9,4,20],"97":[4,9,4,20],"105":[7,1,7,8],"113":[7,13,7,24],"121":[7,25,7,26],"129":[7,28,7,29],"137":[7,31,7,42],"145":[7,31,7,54],"153":[7,56,7,67],"161":[7,56,7,79],"169":[7,13,7,80],"177":[7,1,7,81],"179":[7,1,7,12],"185":[7,1,7,82],"193":[10,1,10,8],"201":[10,13,10,24],"209":[10,25,10,26],"217":[10,28,10,29],"225":[10,31,10,42],"233":[10,31,10,54],"241":[10,56,10,67],"249":[10,56,10,79],"257":[10,13,10,80],"265":[10,1,10,81],"267":[10,1,10,12],"273":[10,1,10,82],"281":[13,1,13,8],"289":[13,13,13,24],"297":[13,25,13,26],"305":[13,28,13,29],"313":[13,13,13,30],"321":[13,1,13,31],"323":[13,1,13,12],"329":[13,1,13,32],"337":[1,1,14,1],"345":[1,1,14,1],"353":[1,1,14,1],"361":[1,1,14,1],"369":[1,1,14,1],"377":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var almostEqual = require(\"almost-equal\")\n\nvar a = 100;\nvar b = 100 + 1e-12;\n\n//Check if a == b up to float precision\nconsole.log(almostEqual(a, b, almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON));\n\n//Check if a == b up to double precision\nconsole.log(almostEqual(a, b, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON));\n\n//Check if a == b up to double precision\nconsole.log(almostEqual(a, b));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(337, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(345, 'almostEqual', almostEqual, 0);
            J$.N(353, 'a', a, 0);
            J$.N(361, 'b', b, 0);
            var almostEqual = J$.X1(41, J$.W(33, 'almostEqual', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "almost-equal", 21, false)), almostEqual, 3));
            var a = J$.X1(65, J$.W(57, 'a', J$.T(49, 100, 22, false), a, 3));
            var b = J$.X1(97, J$.W(89, 'b', J$.B(10, '+', J$.T(73, 100, 22, false), J$.T(81, 1e-12, 22, false), 0), b, 3));
            J$.X1(185, J$.M(177, J$.R(105, 'console', console, 2), 'log', 0)(J$.F(169, J$.R(113, 'almostEqual', almostEqual, 1), 0)(J$.R(121, 'a', a, 1), J$.R(129, 'b', b, 1), J$.G(145, J$.R(137, 'almostEqual', almostEqual, 1), 'FLT_EPSILON', 0), J$.G(161, J$.R(153, 'almostEqual', almostEqual, 1), 'FLT_EPSILON', 0))));
            J$.X1(273, J$.M(265, J$.R(193, 'console', console, 2), 'log', 0)(J$.F(257, J$.R(201, 'almostEqual', almostEqual, 1), 0)(J$.R(209, 'a', a, 1), J$.R(217, 'b', b, 1), J$.G(233, J$.R(225, 'almostEqual', almostEqual, 1), 'DBL_EPSILON', 0), J$.G(249, J$.R(241, 'almostEqual', almostEqual, 1), 'DBL_EPSILON', 0))));
            J$.X1(329, J$.M(321, J$.R(281, 'console', console, 2), 'log', 0)(J$.F(313, J$.R(289, 'almostEqual', almostEqual, 1), 0)(J$.R(297, 'a', a, 1), J$.R(305, 'b', b, 1))));
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
