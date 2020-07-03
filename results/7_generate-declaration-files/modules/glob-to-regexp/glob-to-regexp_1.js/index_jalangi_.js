J$.iids = {"9":[1,20,1,27],"17":[1,28,1,44],"25":[1,20,1,45],"33":[1,20,1,45],"41":[1,20,1,45],"49":[2,10,2,22],"57":[2,23,2,30],"65":[2,10,2,31],"73":[2,10,2,31],"81":[2,10,2,31],"89":[3,1,3,3],"97":[3,9,3,19],"105":[3,1,3,20],"107":[3,1,3,8],"113":[3,1,3,21],"121":[4,1,4,3],"129":[4,9,4,16],"137":[4,1,4,17],"139":[4,1,4,8],"145":[4,1,4,18],"153":[5,1,5,3],"161":[5,9,5,15],"169":[5,1,5,16],"171":[5,1,5,8],"177":[5,1,5,17],"185":[7,6,7,18],"193":[7,19,7,29],"201":[7,6,7,30],"209":[7,6,7,30],"217":[7,1,7,31],"225":[8,1,8,3],"233":[8,9,8,43],"241":[8,1,8,44],"243":[8,1,8,8],"249":[8,1,8,45],"257":[9,1,9,3],"265":[9,9,9,47],"273":[9,1,9,48],"275":[9,1,9,8],"281":[9,1,9,49],"289":[11,6,11,18],"297":[11,19,11,31],"305":[11,6,11,32],"313":[11,6,11,32],"321":[11,1,11,33],"329":[12,1,12,3],"337":[12,9,12,40],"345":[12,1,12,41],"347":[12,1,12,8],"353":[12,1,12,42],"361":[13,1,13,3],"369":[13,9,13,69],"377":[13,1,13,70],"379":[13,1,13,8],"385":[13,1,13,71],"393":[16,6,16,18],"401":[16,19,16,40],"409":[16,54,16,58],"417":[16,67,16,70],"425":[16,42,16,71],"433":[16,6,16,72],"441":[16,6,16,72],"449":[16,1,16,73],"457":[17,1,17,3],"465":[17,9,17,40],"473":[17,1,17,41],"475":[17,1,17,8],"481":[17,1,17,42],"489":[18,1,18,3],"497":[18,9,18,44],"505":[18,1,18,45],"507":[18,1,18,8],"513":[18,1,18,46],"521":[1,1,19,1],"529":[1,1,19,1],"537":[1,1,19,1],"545":[1,1,19,1],"553":[1,1,19,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var globToRegExp = require('glob-to-regexp');\nvar re = globToRegExp(\"p*uck\");\nre.test(\"pot luck\"); // true\nre.test(\"pluck\"); // true\nre.test(\"puck\"); // true\n\nre = globToRegExp(\"*.min.js\");\nre.test(\"http://example.com/jquery.min.js\"); // true\nre.test(\"http://example.com/jquery.min.js.map\"); // false\n\nre = globToRegExp(\"*/www/*.js\");\nre.test(\"http://example.com/www/app.js\"); // true\nre.test(\"http://example.com/www/lib/factory-proxy-model-observer.js\"); // true\n\n// Extended globs\nre = globToRegExp(\"*/www/{*.js,*.html}\", { extended: true, flags: \"i\"});\nre.test(\"http://example.com/www/app.js\"); // true\nre.test(\"http://example.com/www/index.html\"); // true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(521, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(529, 'globToRegExp', globToRegExp, 0);
            J$.N(537, 're', re, 0);
            var globToRegExp = J$.X1(41, J$.W(33, 'globToRegExp', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'glob-to-regexp', 21, false)), globToRegExp, 3));
            var re = J$.X1(81, J$.W(73, 're', J$.F(65, J$.R(49, 'globToRegExp', globToRegExp, 1), 0)(J$.T(57, "p*uck", 21, false)), re, 3));
            J$.X1(113, J$.M(105, J$.R(89, 're', re, 1), 'test', 0)(J$.T(97, "pot luck", 21, false)));
            J$.X1(145, J$.M(137, J$.R(121, 're', re, 1), 'test', 0)(J$.T(129, "pluck", 21, false)));
            J$.X1(177, J$.M(169, J$.R(153, 're', re, 1), 'test', 0)(J$.T(161, "puck", 21, false)));
            J$.X1(217, re = J$.W(209, 're', J$.F(201, J$.R(185, 'globToRegExp', globToRegExp, 1), 0)(J$.T(193, "*.min.js", 21, false)), re, 2));
            J$.X1(249, J$.M(241, J$.R(225, 're', re, 1), 'test', 0)(J$.T(233, "http://example.com/jquery.min.js", 21, false)));
            J$.X1(281, J$.M(273, J$.R(257, 're', re, 1), 'test', 0)(J$.T(265, "http://example.com/jquery.min.js.map", 21, false)));
            J$.X1(321, re = J$.W(313, 're', J$.F(305, J$.R(289, 'globToRegExp', globToRegExp, 1), 0)(J$.T(297, "*/www/*.js", 21, false)), re, 2));
            J$.X1(353, J$.M(345, J$.R(329, 're', re, 1), 'test', 0)(J$.T(337, "http://example.com/www/app.js", 21, false)));
            J$.X1(385, J$.M(377, J$.R(361, 're', re, 1), 'test', 0)(J$.T(369, "http://example.com/www/lib/factory-proxy-model-observer.js", 21, false)));
            J$.X1(449, re = J$.W(441, 're', J$.F(433, J$.R(393, 'globToRegExp', globToRegExp, 1), 0)(J$.T(401, "*/www/{*.js,*.html}", 21, false), J$.T(425, {
                extended: J$.T(409, true, 23, false),
                flags: J$.T(417, "i", 21, false)
            }, 11, false)), re, 2));
            J$.X1(481, J$.M(473, J$.R(457, 're', re, 1), 'test', 0)(J$.T(465, "http://example.com/www/app.js", 21, false)));
            J$.X1(513, J$.M(505, J$.R(489, 're', re, 1), 'test', 0)(J$.T(497, "http://example.com/www/index.html", 21, false)));
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
