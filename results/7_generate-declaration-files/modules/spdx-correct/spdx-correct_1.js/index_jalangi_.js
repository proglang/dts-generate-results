J$.iids = {"9":[1,15,1,22],"10":[8,8,8,48],"17":[1,23,1,37],"25":[1,15,1,38],"33":[1,15,1,38],"41":[1,15,1,38],"49":[2,14,2,21],"57":[2,22,2,30],"65":[2,14,2,31],"73":[2,14,2,31],"81":[2,14,2,31],"89":[4,1,4,7],"97":[4,14,4,21],"105":[4,22,4,27],"113":[4,14,4,28],"121":[4,30,4,35],"129":[4,1,4,36],"131":[4,1,4,13],"137":[4,1,4,36],"145":[6,1,6,7],"153":[6,14,6,21],"161":[6,22,6,32],"169":[6,14,6,33],"177":[6,35,6,47],"185":[6,1,6,48],"187":[6,1,6,13],"193":[6,1,6,48],"201":[8,1,8,7],"209":[8,8,8,15],"217":[8,16,8,38],"225":[8,8,8,39],"233":[8,44,8,48],"241":[8,1,8,49],"249":[8,1,8,49],"257":[11,1,11,7],"265":[11,8,11,15],"273":[11,16,11,25],"281":[11,8,11,26],"289":[11,28,11,46],"297":[11,1,11,47],"305":[11,1,11,47],"313":[12,1,12,7],"321":[12,8,12,15],"329":[12,16,12,25],"337":[12,38,12,43],"345":[12,27,12,45],"353":[12,8,12,46],"361":[12,48,12,57],"369":[12,1,12,58],"377":[12,1,12,58],"385":[1,1,13,1],"393":[1,1,13,1],"401":[1,1,13,1],"409":[1,1,13,1],"417":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var correct = require('spdx-correct')\nvar assert = require('assert')\n\nassert.equal(correct('mit'), 'MIT')\n\nassert.equal(correct('Apache 2'), 'Apache-2.0')\n\nassert(correct('No idea what license') === null)\n\n// disable upgrade option\nassert(correct('GPL-3.0'), 'GPL-3.0-or-later')\nassert(correct('GPL-3.0', { upgrade: false }), 'GPL-3.0')\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(385, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(393, 'correct', correct, 0);
            J$.N(401, 'assert', assert, 0);
            var correct = J$.X1(41, J$.W(33, 'correct', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'spdx-correct', 21, false)), correct, 3));
            var assert = J$.X1(81, J$.W(73, 'assert', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'assert', 21, false)), assert, 3));
            J$.X1(137, J$.M(129, J$.R(89, 'assert', assert, 1), 'equal', 0)(J$.F(113, J$.R(97, 'correct', correct, 1), 0)(J$.T(105, 'mit', 21, false)), J$.T(121, 'MIT', 21, false)));
            J$.X1(193, J$.M(185, J$.R(145, 'assert', assert, 1), 'equal', 0)(J$.F(169, J$.R(153, 'correct', correct, 1), 0)(J$.T(161, 'Apache 2', 21, false)), J$.T(177, 'Apache-2.0', 21, false)));
            J$.X1(249, J$.F(241, J$.R(201, 'assert', assert, 1), 0)(J$.B(10, '===', J$.F(225, J$.R(209, 'correct', correct, 1), 0)(J$.T(217, 'No idea what license', 21, false)), J$.T(233, null, 25, false), 0)));
            J$.X1(305, J$.F(297, J$.R(257, 'assert', assert, 1), 0)(J$.F(281, J$.R(265, 'correct', correct, 1), 0)(J$.T(273, 'GPL-3.0', 21, false)), J$.T(289, 'GPL-3.0-or-later', 21, false)));
            J$.X1(377, J$.F(369, J$.R(313, 'assert', assert, 1), 0)(J$.F(353, J$.R(321, 'correct', correct, 1), 0)(J$.T(329, 'GPL-3.0', 21, false), J$.T(345, {
                upgrade: J$.T(337, false, 23, false)
            }, 11, false)), J$.T(361, 'GPL-3.0', 21, false)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
