J$.iids = {"9":[1,20,1,27],"17":[1,28,1,44],"25":[1,20,1,45],"33":[1,20,1,45],"41":[1,20,1,45],"49":[2,10,2,22],"57":[2,23,2,30],"65":[2,10,2,31],"73":[2,10,2,31],"81":[2,10,2,31],"89":[3,1,3,3],"97":[3,9,3,19],"105":[3,1,3,20],"107":[3,1,3,8],"113":[3,1,3,21],"121":[4,1,4,3],"129":[4,9,4,16],"137":[4,1,4,17],"139":[4,1,4,8],"145":[4,1,4,18],"153":[5,1,5,3],"161":[5,9,5,15],"169":[5,1,5,16],"171":[5,1,5,8],"177":[5,1,5,17],"185":[7,6,7,18],"193":[7,19,7,29],"201":[7,6,7,30],"209":[7,6,7,30],"217":[7,1,7,31],"225":[8,1,8,3],"233":[8,9,8,43],"241":[8,1,8,44],"243":[8,1,8,8],"249":[8,1,8,45],"257":[9,1,9,3],"265":[9,9,9,47],"273":[9,1,9,48],"275":[9,1,9,8],"281":[9,1,9,49],"289":[11,6,11,18],"297":[11,19,11,31],"305":[11,33,11,35],"313":[11,6,11,36],"321":[11,6,11,36],"329":[11,1,11,37],"337":[12,1,12,3],"345":[12,9,12,40],"353":[12,1,12,41],"355":[12,1,12,8],"361":[12,1,12,42],"369":[13,1,13,3],"377":[13,9,13,69],"385":[13,1,13,70],"387":[13,1,13,8],"393":[13,1,13,71],"401":[16,6,16,18],"409":[16,19,16,40],"417":[16,54,16,58],"425":[16,67,16,70],"433":[16,82,16,86],"441":[16,42,16,88],"449":[16,6,16,89],"457":[16,6,16,89],"465":[16,1,16,90],"473":[17,1,17,3],"481":[17,9,17,40],"489":[17,1,17,41],"491":[17,1,17,8],"497":[17,1,17,42],"505":[18,1,18,3],"513":[18,9,18,44],"521":[18,1,18,45],"523":[18,1,18,8],"529":[18,1,18,46],"537":[1,1,19,1],"545":[1,1,19,1],"553":[1,1,19,1],"561":[1,1,19,1],"569":[1,1,19,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var globToRegExp = require('glob-to-regexp');\nvar re = globToRegExp(\"p*uck\");\nre.test(\"pot luck\"); // true\nre.test(\"pluck\"); // true\nre.test(\"puck\"); // true\n\nre = globToRegExp(\"*.min.js\");\nre.test(\"http://example.com/jquery.min.js\"); // true\nre.test(\"http://example.com/jquery.min.js.map\"); // false\n\nre = globToRegExp(\"*/www/*.js\", {});\nre.test(\"http://example.com/www/app.js\"); // true\nre.test(\"http://example.com/www/lib/factory-proxy-model-observer.js\"); // true\n\n// Extended globs\nre = globToRegExp(\"*/www/{*.js,*.html}\", { extended: true, flags: \"i\", globstar: true });\nre.test(\"http://example.com/www/app.js\"); // true\nre.test(\"http://example.com/www/index.html\"); // true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(537, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(545, 'globToRegExp', globToRegExp, 0);
            J$.N(553, 're', re, 0);
            var globToRegExp = J$.X1(41, J$.W(33, 'globToRegExp', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'glob-to-regexp', 21, false)), globToRegExp, 3));
            var re = J$.X1(81, J$.W(73, 're', J$.F(65, J$.R(49, 'globToRegExp', globToRegExp, 1), 0)(J$.T(57, "p*uck", 21, false)), re, 3));
            J$.X1(113, J$.M(105, J$.R(89, 're', re, 1), 'test', 0)(J$.T(97, "pot luck", 21, false)));
            J$.X1(145, J$.M(137, J$.R(121, 're', re, 1), 'test', 0)(J$.T(129, "pluck", 21, false)));
            J$.X1(177, J$.M(169, J$.R(153, 're', re, 1), 'test', 0)(J$.T(161, "puck", 21, false)));
            J$.X1(217, re = J$.W(209, 're', J$.F(201, J$.R(185, 'globToRegExp', globToRegExp, 1), 0)(J$.T(193, "*.min.js", 21, false)), re, 2));
            J$.X1(249, J$.M(241, J$.R(225, 're', re, 1), 'test', 0)(J$.T(233, "http://example.com/jquery.min.js", 21, false)));
            J$.X1(281, J$.M(273, J$.R(257, 're', re, 1), 'test', 0)(J$.T(265, "http://example.com/jquery.min.js.map", 21, false)));
            J$.X1(329, re = J$.W(321, 're', J$.F(313, J$.R(289, 'globToRegExp', globToRegExp, 1), 0)(J$.T(297, "*/www/*.js", 21, false), J$.T(305, {}, 11, false)), re, 2));
            J$.X1(361, J$.M(353, J$.R(337, 're', re, 1), 'test', 0)(J$.T(345, "http://example.com/www/app.js", 21, false)));
            J$.X1(393, J$.M(385, J$.R(369, 're', re, 1), 'test', 0)(J$.T(377, "http://example.com/www/lib/factory-proxy-model-observer.js", 21, false)));
            J$.X1(465, re = J$.W(457, 're', J$.F(449, J$.R(401, 'globToRegExp', globToRegExp, 1), 0)(J$.T(409, "*/www/{*.js,*.html}", 21, false), J$.T(441, {
                extended: J$.T(417, true, 23, false),
                flags: J$.T(425, "i", 21, false),
                globstar: J$.T(433, true, 23, false)
            }, 11, false)), re, 2));
            J$.X1(497, J$.M(489, J$.R(473, 're', re, 1), 'test', 0)(J$.T(481, "http://example.com/www/app.js", 21, false)));
            J$.X1(529, J$.M(521, J$.R(505, 're', re, 1), 'test', 0)(J$.T(513, "http://example.com/www/index.html", 21, false)));
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
