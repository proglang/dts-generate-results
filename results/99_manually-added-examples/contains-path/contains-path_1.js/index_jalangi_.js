J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,1,3,13],"57":[3,14,3,23],"65":[3,25,3,30],"73":[3,32,3,34],"81":[3,1,3,35],"89":[3,1,3,36],"97":[4,1,4,13],"105":[4,14,4,23],"113":[4,25,4,30],"121":[4,48,4,52],"129":[4,32,4,54],"137":[4,1,4,55],"145":[4,1,4,56],"153":[5,1,5,13],"161":[5,14,5,23],"169":[5,25,5,30],"177":[5,1,5,31],"185":[5,1,5,32],"193":[8,1,8,13],"201":[8,14,8,22],"209":[8,24,8,29],"217":[8,1,8,30],"225":[8,1,8,31],"233":[9,1,9,13],"241":[9,14,9,23],"249":[9,25,9,30],"257":[9,1,9,31],"265":[9,1,9,32],"273":[10,1,10,13],"281":[10,14,10,23],"289":[10,25,10,30],"297":[10,1,10,31],"305":[10,1,10,32],"313":[13,1,13,13],"321":[13,14,13,23],"329":[13,25,13,30],"337":[13,41,13,45],"345":[13,32,13,46],"353":[13,1,13,47],"361":[13,1,13,48],"369":[14,1,14,13],"377":[14,14,14,23],"385":[14,25,14,32],"393":[14,1,14,33],"401":[14,1,14,34],"409":[1,1,14,45],"417":[1,1,14,45],"425":[1,1,14,45],"433":[1,1,14,45],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var containsPath = require('contains-path');\n\ncontainsPath('foo/bar', 'foo', {}); //=> true\ncontainsPath('foo/bar', 'bar', { partialMatch: true }); //=> true\ncontainsPath('foo/bar', 'qux'); //=> false\n\n// returns false for partial matches\ncontainsPath('foobar', 'foo');  //=> false\ncontainsPath('foo.bar', 'foo'); //=> false\ncontainsPath('foo.bar', 'bar'); //=> false\n\n// prefix with \"./\" to match from beginning of filepath\ncontainsPath('bar/foo', 'foo', {nocase: true});   //=> true\ncontainsPath('bar/foo', './foo'); //=> false"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(417, 'containsPath', containsPath, 0);
            var containsPath = J$.X1(41, J$.W(33, 'containsPath', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'contains-path', 21, false)), containsPath, 3));
            J$.X1(89, J$.F(81, J$.R(49, 'containsPath', containsPath, 1), 0)(J$.T(57, 'foo/bar', 21, false), J$.T(65, 'foo', 21, false), J$.T(73, {}, 11, false)));
            J$.X1(145, J$.F(137, J$.R(97, 'containsPath', containsPath, 1), 0)(J$.T(105, 'foo/bar', 21, false), J$.T(113, 'bar', 21, false), J$.T(129, {
                partialMatch: J$.T(121, true, 23, false)
            }, 11, false)));
            J$.X1(185, J$.F(177, J$.R(153, 'containsPath', containsPath, 1), 0)(J$.T(161, 'foo/bar', 21, false), J$.T(169, 'qux', 21, false)));
            J$.X1(225, J$.F(217, J$.R(193, 'containsPath', containsPath, 1), 0)(J$.T(201, 'foobar', 21, false), J$.T(209, 'foo', 21, false)));
            J$.X1(265, J$.F(257, J$.R(233, 'containsPath', containsPath, 1), 0)(J$.T(241, 'foo.bar', 21, false), J$.T(249, 'foo', 21, false)));
            J$.X1(305, J$.F(297, J$.R(273, 'containsPath', containsPath, 1), 0)(J$.T(281, 'foo.bar', 21, false), J$.T(289, 'bar', 21, false)));
            J$.X1(361, J$.F(353, J$.R(313, 'containsPath', containsPath, 1), 0)(J$.T(321, 'bar/foo', 21, false), J$.T(329, 'foo', 21, false), J$.T(345, {
                nocase: J$.T(337, true, 23, false)
            }, 11, false)));
            J$.X1(401, J$.F(393, J$.R(369, 'containsPath', containsPath, 1), 0)(J$.T(377, 'bar/foo', 21, false), J$.T(385, './foo', 21, false)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
