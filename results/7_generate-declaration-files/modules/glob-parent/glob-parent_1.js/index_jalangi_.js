J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[3,1,3,11],"57":[3,12,3,26],"65":[3,1,3,27],"73":[3,1,3,28],"81":[4,1,4,11],"89":[4,12,4,32],"97":[4,1,4,33],"105":[4,1,4,34],"113":[5,1,5,11],"121":[5,12,5,19],"129":[5,1,5,20],"137":[5,1,5,21],"145":[6,1,6,11],"153":[6,12,6,18],"161":[6,1,6,19],"169":[6,1,6,20],"177":[7,1,7,11],"185":[7,12,7,21],"193":[7,1,7,22],"201":[7,1,7,23],"209":[8,1,8,11],"217":[8,12,8,28],"225":[8,1,8,29],"233":[8,1,8,30],"241":[9,1,9,11],"249":[9,12,9,29],"257":[9,1,9,30],"265":[9,1,9,31],"273":[10,1,10,11],"281":[10,12,10,29],"289":[10,1,10,30],"297":[10,1,10,31],"305":[11,1,11,11],"313":[11,12,11,29],"321":[11,1,11,30],"329":[11,1,11,31],"337":[12,1,12,11],"345":[12,12,12,29],"353":[12,1,12,30],"361":[12,1,12,31],"369":[13,1,13,11],"377":[13,12,13,29],"385":[13,1,13,30],"393":[13,1,13,31],"401":[14,1,14,11],"409":[14,12,14,23],"417":[14,1,14,24],"425":[14,1,14,25],"433":[17,1,17,11],"441":[17,12,17,29],"449":[17,1,17,30],"457":[17,1,17,31],"465":[18,1,18,11],"473":[18,12,18,23],"481":[18,1,18,24],"489":[18,1,18,25],"497":[19,1,19,11],"505":[19,12,19,22],"513":[19,1,19,23],"521":[19,1,19,24],"529":[1,1,20,1],"537":[1,1,20,1],"545":[1,1,20,1],"553":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var globParent = require('glob-parent');\n\nglobParent('path/to/*.js'); // 'path/to'\nglobParent('/root/path/to/*.js'); // '/root/path/to'\nglobParent('/*.js'); // '/'\nglobParent('*.js'); // '.'\nglobParent('**/*.js'); // '.'\nglobParent('path/{to,from}'); // 'path'\nglobParent('path/!(to|from)'); // 'path'\nglobParent('path/?(to|from)'); // 'path'\nglobParent('path/+(to|from)'); // 'path'\nglobParent('path/*(to|from)'); // 'path'\nglobParent('path/@(to|from)'); // 'path'\nglobParent('path/**/*'); // 'path'\n\n// if provided a non-glob path, returns the nearest dir\nglobParent('path/foo/bar.js'); // 'path/foo'\nglobParent('path/foo/'); // 'path/foo'\nglobParent('path/foo'); // 'path' (see issue #3 for details)\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(529, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(537, 'globParent', globParent, 0);
            var globParent = J$.X1(41, J$.W(33, 'globParent', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'glob-parent', 21, false)), globParent, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'globParent', globParent, 1), 0)(J$.T(57, 'path/to/*.js', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'globParent', globParent, 1), 0)(J$.T(89, '/root/path/to/*.js', 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'globParent', globParent, 1), 0)(J$.T(121, '/*.js', 21, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'globParent', globParent, 1), 0)(J$.T(153, '*.js', 21, false)));
            J$.X1(201, J$.F(193, J$.R(177, 'globParent', globParent, 1), 0)(J$.T(185, '**/*.js', 21, false)));
            J$.X1(233, J$.F(225, J$.R(209, 'globParent', globParent, 1), 0)(J$.T(217, 'path/{to,from}', 21, false)));
            J$.X1(265, J$.F(257, J$.R(241, 'globParent', globParent, 1), 0)(J$.T(249, 'path/!(to|from)', 21, false)));
            J$.X1(297, J$.F(289, J$.R(273, 'globParent', globParent, 1), 0)(J$.T(281, 'path/?(to|from)', 21, false)));
            J$.X1(329, J$.F(321, J$.R(305, 'globParent', globParent, 1), 0)(J$.T(313, 'path/+(to|from)', 21, false)));
            J$.X1(361, J$.F(353, J$.R(337, 'globParent', globParent, 1), 0)(J$.T(345, 'path/*(to|from)', 21, false)));
            J$.X1(393, J$.F(385, J$.R(369, 'globParent', globParent, 1), 0)(J$.T(377, 'path/@(to|from)', 21, false)));
            J$.X1(425, J$.F(417, J$.R(401, 'globParent', globParent, 1), 0)(J$.T(409, 'path/**/*', 21, false)));
            J$.X1(457, J$.F(449, J$.R(433, 'globParent', globParent, 1), 0)(J$.T(441, 'path/foo/bar.js', 21, false)));
            J$.X1(489, J$.F(481, J$.R(465, 'globParent', globParent, 1), 0)(J$.T(473, 'path/foo/', 21, false)));
            J$.X1(521, J$.F(513, J$.R(497, 'globParent', globParent, 1), 0)(J$.T(505, 'path/foo', 21, false)));
        } catch (J$e) {
            J$.Ex(545, J$e);
        } finally {
            if (J$.Sr(553)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
