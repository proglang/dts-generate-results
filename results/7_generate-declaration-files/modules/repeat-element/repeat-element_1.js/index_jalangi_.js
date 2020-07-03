J$.iids = {"9":[1,14,1,21],"17":[1,22,1,38],"25":[1,14,1,39],"33":[1,14,1,39],"41":[1,14,1,39],"49":[3,1,3,7],"57":[3,8,3,11],"65":[3,13,3,14],"73":[3,1,3,15],"81":[3,1,3,16],"89":[6,1,6,7],"97":[6,8,6,11],"105":[6,13,6,14],"113":[6,1,6,15],"121":[6,1,6,16],"129":[9,1,9,7],"137":[9,8,9,11],"145":[9,13,9,14],"153":[9,1,9,15],"161":[9,1,9,16],"169":[12,1,12,7],"177":[12,8,12,12],"185":[12,14,12,15],"193":[12,1,12,16],"201":[12,1,12,16],"209":[15,1,15,7],"217":[15,15,15,23],"225":[15,8,15,24],"233":[15,26,15,27],"241":[15,1,15,28],"249":[15,1,15,28],"257":[22,1,22,7],"265":[22,8,22,9],"273":[22,11,22,12],"281":[22,1,22,13],"289":[22,1,22,13],"297":[1,1,24,1],"305":[1,1,24,1],"313":[1,1,24,1],"321":[1,1,24,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var repeat = require('repeat-element');\n\nrepeat('a', 5);\n//=> ['a', 'a', 'a', 'a', 'a']\n\nrepeat('a', 1);\n//=> ['a']\n\nrepeat('a', 0);\n//=> []\n\nrepeat(null, 5)\n//» [ null, null, null, null, null ]\n\nrepeat({some: 'object'}, 5)\n//» [ { some: 'object' },\n//    { some: 'object' },\n//    { some: 'object' },\n//    { some: 'object' },\n//    { some: 'object' } ]\n\nrepeat(5, 5)\n//» [ 5, 5, 5, 5, 5 ]\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'repeat', repeat, 0);
            var repeat = J$.X1(41, J$.W(33, 'repeat', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'repeat-element', 21, false)), repeat, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'repeat', repeat, 1), 0)(J$.T(57, 'a', 21, false), J$.T(65, 5, 22, false)));
            J$.X1(121, J$.F(113, J$.R(89, 'repeat', repeat, 1), 0)(J$.T(97, 'a', 21, false), J$.T(105, 1, 22, false)));
            J$.X1(161, J$.F(153, J$.R(129, 'repeat', repeat, 1), 0)(J$.T(137, 'a', 21, false), J$.T(145, 0, 22, false)));
            J$.X1(201, J$.F(193, J$.R(169, 'repeat', repeat, 1), 0)(J$.T(177, null, 25, false), J$.T(185, 5, 22, false)));
            J$.X1(249, J$.F(241, J$.R(209, 'repeat', repeat, 1), 0)(J$.T(225, {
                some: J$.T(217, 'object', 21, false)
            }, 11, false), J$.T(233, 5, 22, false)));
            J$.X1(289, J$.F(281, J$.R(257, 'repeat', repeat, 1), 0)(J$.T(265, 5, 22, false), J$.T(273, 5, 22, false)));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
