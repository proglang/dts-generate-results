J$.iids = {"9":[1,15,1,22],"17":[1,23,1,38],"25":[1,15,1,39],"33":[1,15,1,39],"41":[1,15,1,39],"49":[7,1,7,8],"57":[7,9,7,17],"65":[7,1,7,18],"73":[7,1,7,19],"81":[9,1,9,8],"89":[9,9,9,25],"97":[9,1,9,26],"105":[9,1,9,27],"113":[11,1,11,8],"121":[11,9,11,17],"129":[11,1,11,18],"137":[11,1,11,19],"145":[18,1,18,8],"153":[18,1,18,10],"161":[18,1,18,11],"169":[20,1,20,8],"177":[20,9,20,13],"185":[20,1,20,14],"193":[20,1,20,15],"201":[22,1,22,8],"209":[22,9,22,18],"217":[22,1,22,19],"225":[22,1,22,20],"233":[24,1,24,8],"241":[24,9,24,15],"249":[24,1,24,16],"257":[24,1,24,17],"265":[26,1,26,8],"273":[26,9,26,20],"281":[26,1,26,21],"289":[26,1,26,22],"297":[28,1,28,8],"305":[28,9,28,19],"313":[28,1,28,20],"321":[28,1,28,21],"329":[30,1,30,8],"337":[30,9,30,27],"345":[30,1,30,28],"353":[30,1,30,29],"361":[32,1,32,8],"369":[32,9,32,23],"377":[32,1,32,24],"385":[32,1,32,25],"393":[34,1,34,8],"401":[34,9,34,23],"409":[34,1,34,24],"417":[34,1,34,25],"425":[36,1,36,8],"433":[36,9,36,19],"441":[36,1,36,20],"449":[36,1,36,21],"457":[1,1,38,1],"465":[1,1,38,1],"473":[1,1,38,1],"481":[1,1,38,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isValid = require('is-valid-path');\n\n/**\n * Valid\n */\n\nisValid('abc.js');\n//=> 'true'\nisValid('abc/def/ghi.js');\n//=> 'true'\nisValid('foo.js');\n//=> 'true'\n\n/**\n * Invalid\n */\n\nisValid();\n//=> 'valse'\nisValid(null);\n//=> 'valse'\nisValid('!foo.js');\n//=> 'false'\nisValid('*.js');\n//=> 'false'\nisValid('**/abc.js');\n//=> 'false'\nisValid('abc/*.js');\n//=> 'false'\nisValid('abc/(aaa|bbb).js');\n//=> 'false'\nisValid('abc/[a-z].js');\n//=> 'false'\nisValid('abc/{a,b}.js');\n//=> 'false'\nisValid('abc/?.js');\n//=> 'false'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(457, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(465, 'isValid', isValid, 0);
            var isValid = J$.X1(41, J$.W(33, 'isValid', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-valid-path', 21, false)), isValid, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isValid', isValid, 1), 0)(J$.T(57, 'abc.js', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'isValid', isValid, 1), 0)(J$.T(89, 'abc/def/ghi.js', 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'isValid', isValid, 1), 0)(J$.T(121, 'foo.js', 21, false)));
            J$.X1(161, J$.F(153, J$.R(145, 'isValid', isValid, 1), 0)());
            J$.X1(193, J$.F(185, J$.R(169, 'isValid', isValid, 1), 0)(J$.T(177, null, 25, false)));
            J$.X1(225, J$.F(217, J$.R(201, 'isValid', isValid, 1), 0)(J$.T(209, '!foo.js', 21, false)));
            J$.X1(257, J$.F(249, J$.R(233, 'isValid', isValid, 1), 0)(J$.T(241, '*.js', 21, false)));
            J$.X1(289, J$.F(281, J$.R(265, 'isValid', isValid, 1), 0)(J$.T(273, '**/abc.js', 21, false)));
            J$.X1(321, J$.F(313, J$.R(297, 'isValid', isValid, 1), 0)(J$.T(305, 'abc/*.js', 21, false)));
            J$.X1(353, J$.F(345, J$.R(329, 'isValid', isValid, 1), 0)(J$.T(337, 'abc/(aaa|bbb).js', 21, false)));
            J$.X1(385, J$.F(377, J$.R(361, 'isValid', isValid, 1), 0)(J$.T(369, 'abc/[a-z].js', 21, false)));
            J$.X1(417, J$.F(409, J$.R(393, 'isValid', isValid, 1), 0)(J$.T(401, 'abc/{a,b}.js', 21, false)));
            J$.X1(449, J$.F(441, J$.R(425, 'isValid', isValid, 1), 0)(J$.T(433, 'abc/?.js', 21, false)));
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
