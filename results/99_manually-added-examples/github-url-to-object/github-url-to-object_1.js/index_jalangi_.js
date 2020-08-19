J$.iids = {"9":[1,10,1,17],"17":[1,18,1,40],"25":[1,10,1,41],"33":[1,10,1,41],"41":[1,10,1,41],"49":[3,1,3,3],"57":[3,4,3,28],"65":[3,1,3,29],"73":[3,1,3,30],"81":[4,1,4,3],"89":[4,4,4,40],"97":[4,1,4,41],"105":[4,1,4,42],"113":[5,1,5,3],"121":[5,4,5,52],"129":[5,1,5,53],"137":[5,1,5,54],"145":[6,1,6,3],"153":[6,4,6,67],"161":[6,1,6,68],"169":[6,1,6,69],"177":[7,1,7,3],"185":[7,4,7,44],"193":[7,1,7,45],"201":[7,1,7,46],"209":[8,1,8,3],"217":[8,4,8,39],"225":[8,1,8,40],"233":[8,1,8,41],"241":[9,1,9,3],"249":[9,4,9,42],"257":[9,1,9,43],"265":[9,1,9,44],"273":[10,1,10,3],"281":[10,4,10,50],"289":[10,52,10,54],"297":[10,1,10,55],"305":[10,1,10,56],"313":[11,1,11,3],"321":[11,4,11,50],"329":[11,65,11,69],"337":[11,52,11,70],"345":[11,1,11,71],"353":[11,1,11,72],"361":[12,1,12,3],"369":[12,10,12,48],"377":[12,4,12,49],"385":[12,1,12,50],"393":[12,1,12,51],"401":[13,1,13,3],"409":[13,4,13,30],"417":[13,1,13,31],"425":[13,1,13,32],"433":[14,1,14,3],"441":[14,10,14,36],"449":[14,4,14,37],"457":[14,1,14,38],"465":[14,1,14,39],"473":[1,1,15,1],"481":[1,1,15,1],"489":[1,1,15,1],"497":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var gh = require('github-url-to-object')\n\ngh('github:monkey/business');\ngh('https://github.com/monkey/business');\ngh('https://github.com/monkey/business/tree/master');\ngh('https://github.com/monkey/business/tree/master/nested/file.js');\ngh('https://github.com/monkey/business.git');\ngh('http://github.com/monkey/business');\ngh('git://github.com/monkey/business.git');\ngh('git+https://githuuub.com/monkey/business.git', {});\ngh('git+https://githuuub.com/monkey/business.git', {enterprise: true});\ngh({url: 'git://github.com/monkey/business.git'});\ngh('this is not a proper url');\ngh({url: 'this is not a proper url'});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(473, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(481, 'gh', gh, 0);
            var gh = J$.X1(41, J$.W(33, 'gh', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'github-url-to-object', 21, false)), gh, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'gh', gh, 1), 0)(J$.T(57, 'github:monkey/business', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'gh', gh, 1), 0)(J$.T(89, 'https://github.com/monkey/business', 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'gh', gh, 1), 0)(J$.T(121, 'https://github.com/monkey/business/tree/master', 21, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'gh', gh, 1), 0)(J$.T(153, 'https://github.com/monkey/business/tree/master/nested/file.js', 21, false)));
            J$.X1(201, J$.F(193, J$.R(177, 'gh', gh, 1), 0)(J$.T(185, 'https://github.com/monkey/business.git', 21, false)));
            J$.X1(233, J$.F(225, J$.R(209, 'gh', gh, 1), 0)(J$.T(217, 'http://github.com/monkey/business', 21, false)));
            J$.X1(265, J$.F(257, J$.R(241, 'gh', gh, 1), 0)(J$.T(249, 'git://github.com/monkey/business.git', 21, false)));
            J$.X1(305, J$.F(297, J$.R(273, 'gh', gh, 1), 0)(J$.T(281, 'git+https://githuuub.com/monkey/business.git', 21, false), J$.T(289, {}, 11, false)));
            J$.X1(353, J$.F(345, J$.R(313, 'gh', gh, 1), 0)(J$.T(321, 'git+https://githuuub.com/monkey/business.git', 21, false), J$.T(337, {
                enterprise: J$.T(329, true, 23, false)
            }, 11, false)));
            J$.X1(393, J$.F(385, J$.R(361, 'gh', gh, 1), 0)(J$.T(377, {
                url: J$.T(369, 'git://github.com/monkey/business.git', 21, false)
            }, 11, false)));
            J$.X1(425, J$.F(417, J$.R(401, 'gh', gh, 1), 0)(J$.T(409, 'this is not a proper url', 21, false)));
            J$.X1(465, J$.F(457, J$.R(433, 'gh', gh, 1), 0)(J$.T(449, {
                url: J$.T(441, 'this is not a proper url', 21, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
