J$.iids = {"9":[1,20,1,27],"10":[11,4,11,6],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[2,10,2,22],"57":[3,10,3,22],"65":[3,10,3,29],"73":[3,10,3,43],"81":[4,9,4,15],"89":[2,23,5,2],"97":[2,10,5,3],"105":[2,10,5,3],"113":[2,10,5,3],"121":[8,1,8,3],"129":[8,4,8,5],"137":[8,1,8,6],"145":[8,1,8,6],"153":[11,1,11,3],"161":[11,5,11,6],"169":[11,1,11,7],"177":[11,1,11,7],"185":[14,1,14,3],"193":[14,4,14,5],"201":[14,7,14,11],"209":[14,1,14,12],"217":[14,1,14,12],"225":[17,1,17,3],"233":[17,10,17,11],"241":[17,1,17,12],"243":[17,1,17,9],"249":[17,1,17,12],"257":[20,1,20,3],"265":[20,10,20,11],"273":[20,13,20,17],"281":[20,1,20,18],"283":[20,1,20,9],"289":[20,1,20,18],"297":[1,1,21,1],"305":[1,1,21,1],"313":[1,1,21,1],"321":[1,1,21,1],"329":[1,1,21,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ModularScale = require('modular-scale')\nvar ms = ModularScale({\n  ratio: ModularScale.ratios.goldenSection,\n  base: '16px'\n})\n\n// Get a step up from the base font size in the scale\nms(4) // 109.656\n\n// Get a step down from the base font size in the scale\nms(-1) // 9.889\n\n// Get a rem or em relative value\nms(4, true) // 6.854\n\n// Get an array of steps for use as pixel measurements\nms.steps(6) // [ 67.773, 41.887, 25.888, 16, 9.889, 6.112, 3.777 ]\n\n// Also can return relative values for use with em, rem etc.\nms.steps(6, true) // [ 4.236, 2.618, 1.618, 1, 0.618, 0.382, 0.236 ]\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'ModularScale', ModularScale, 0);
            J$.N(313, 'ms', ms, 0);
            var ModularScale = J$.X1(41, J$.W(33, 'ModularScale', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'modular-scale', 21, false)), ModularScale, 3));
            var ms = J$.X1(113, J$.W(105, 'ms', J$.F(97, J$.R(49, 'ModularScale', ModularScale, 1), 0)(J$.T(89, {
                ratio: J$.G(73, J$.G(65, J$.R(57, 'ModularScale', ModularScale, 1), 'ratios', 0), 'goldenSection', 0),
                base: J$.T(81, '16px', 21, false)
            }, 11, false)), ms, 3));
            J$.X1(145, J$.F(137, J$.R(121, 'ms', ms, 1), 0)(J$.T(129, 4, 22, false)));
            J$.X1(177, J$.F(169, J$.R(153, 'ms', ms, 1), 0)(J$.U(10, '-', J$.T(161, 1, 22, false))));
            J$.X1(217, J$.F(209, J$.R(185, 'ms', ms, 1), 0)(J$.T(193, 4, 22, false), J$.T(201, true, 23, false)));
            J$.X1(249, J$.M(241, J$.R(225, 'ms', ms, 1), 'steps', 0)(J$.T(233, 6, 22, false)));
            J$.X1(289, J$.M(281, J$.R(257, 'ms', ms, 1), 'steps', 0)(J$.T(265, 6, 22, false), J$.T(273, true, 23, false)));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
