J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[3,1,3,11],"57":[3,18,3,24],"65":[3,1,3,25],"67":[3,1,3,17],"73":[3,1,3,26],"81":[4,1,4,11],"89":[4,18,4,48],"97":[4,1,4,49],"99":[4,1,4,17],"105":[4,1,4,50],"113":[5,1,5,11],"121":[5,18,5,34],"129":[5,1,5,35],"131":[5,1,5,17],"137":[5,1,5,36],"145":[6,1,6,11],"153":[6,18,6,39],"161":[6,1,6,40],"163":[6,1,6,17],"169":[6,1,6,41],"177":[7,1,7,11],"185":[7,18,7,41],"193":[7,1,7,42],"195":[7,1,7,17],"201":[7,1,7,43],"209":[8,1,8,11],"217":[8,18,8,44],"225":[8,1,8,45],"227":[8,1,8,17],"233":[8,1,8,46],"241":[9,1,9,11],"249":[9,18,9,46],"257":[9,1,9,47],"259":[9,1,9,17],"265":[9,1,9,48],"273":[10,1,10,11],"281":[10,18,10,49],"289":[10,1,10,50],"291":[10,1,10,17],"297":[10,1,10,51],"305":[13,1,13,11],"313":[13,18,13,33],"321":[13,1,13,34],"323":[13,1,13,17],"329":[13,1,13,35],"337":[14,1,14,11],"345":[14,18,14,23],"353":[14,1,14,24],"355":[14,1,14,17],"361":[14,1,14,25],"369":[15,1,15,11],"377":[15,18,15,33],"385":[15,1,15,34],"387":[15,1,15,17],"393":[15,1,15,35],"401":[16,1,16,11],"409":[16,18,16,35],"417":[16,1,16,36],"419":[16,1,16,17],"425":[16,1,16,37],"433":[1,1,18,1],"441":[1,1,18,1],"449":[1,1,18,1],"457":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isAbsolute = require('is-absolute');\n\nisAbsolute.win32('c:\\\\');\nisAbsolute.win32('//C://user\\\\docs\\\\Letter.txt');\nisAbsolute.win32('\\\\\\\\unc\\\\share');\nisAbsolute.win32('\\\\\\\\unc\\\\share\\\\foo');\nisAbsolute.win32('\\\\\\\\unc\\\\share\\\\foo\\\\');\nisAbsolute.win32('\\\\\\\\unc\\\\share\\\\foo\\\\bar');\nisAbsolute.win32('\\\\\\\\unc\\\\share\\\\foo\\\\bar\\\\');\nisAbsolute.win32('\\\\\\\\unc\\\\share\\\\foo\\\\bar\\\\baz');\n//=> true\n\nisAbsolute.win32('a:foo/a/b/c/d');\nisAbsolute.win32(':\\\\');\nisAbsolute.win32('foo\\\\bar\\\\baz');\nisAbsolute.win32('foo\\\\bar\\\\baz\\\\');\n//=> false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(433, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(441, 'isAbsolute', isAbsolute, 0);
            var isAbsolute = J$.X1(41, J$.W(33, 'isAbsolute', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-absolute', 21, false)), isAbsolute, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(57, 'c:\\', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(89, '//C://user\\docs\\Letter.txt', 21, false)));
            J$.X1(137, J$.M(129, J$.R(113, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(121, '\\\\unc\\share', 21, false)));
            J$.X1(169, J$.M(161, J$.R(145, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(153, '\\\\unc\\share\\foo', 21, false)));
            J$.X1(201, J$.M(193, J$.R(177, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(185, '\\\\unc\\share\\foo\\', 21, false)));
            J$.X1(233, J$.M(225, J$.R(209, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(217, '\\\\unc\\share\\foo\\bar', 21, false)));
            J$.X1(265, J$.M(257, J$.R(241, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(249, '\\\\unc\\share\\foo\\bar\\', 21, false)));
            J$.X1(297, J$.M(289, J$.R(273, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(281, '\\\\unc\\share\\foo\\bar\\baz', 21, false)));
            J$.X1(329, J$.M(321, J$.R(305, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(313, 'a:foo/a/b/c/d', 21, false)));
            J$.X1(361, J$.M(353, J$.R(337, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(345, ':\\', 21, false)));
            J$.X1(393, J$.M(385, J$.R(369, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(377, 'foo\\bar\\baz', 21, false)));
            J$.X1(425, J$.M(417, J$.R(401, 'isAbsolute', isAbsolute, 1), 'win32', 0)(J$.T(409, 'foo\\bar\\baz\\', 21, false)));
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
