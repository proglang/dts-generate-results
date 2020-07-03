J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,1,3,13],"57":[3,14,3,23],"65":[3,25,3,30],"73":[3,1,3,31],"81":[3,1,3,32],"89":[4,1,4,13],"97":[4,14,4,23],"105":[4,25,4,30],"113":[4,1,4,31],"121":[4,1,4,32],"129":[5,1,5,13],"137":[5,14,5,23],"145":[5,25,5,30],"153":[5,1,5,31],"161":[5,1,5,32],"169":[8,1,8,13],"177":[8,14,8,22],"185":[8,24,8,29],"193":[8,1,8,30],"201":[8,1,8,31],"209":[9,1,9,13],"217":[9,14,9,23],"225":[9,25,9,30],"233":[9,1,9,31],"241":[9,1,9,32],"249":[10,1,10,13],"257":[10,14,10,23],"265":[10,25,10,30],"273":[10,1,10,31],"281":[10,1,10,32],"289":[13,1,13,13],"297":[13,14,13,23],"305":[13,25,13,30],"313":[13,1,13,31],"321":[13,1,13,32],"329":[14,1,14,13],"337":[14,14,14,23],"345":[14,25,14,32],"353":[14,1,14,33],"361":[14,1,14,34],"369":[1,1,15,1],"377":[1,1,15,1],"385":[1,1,15,1],"393":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var containsPath = require('contains-path');\n\ncontainsPath('foo/bar', 'foo'); //=> true\ncontainsPath('foo/bar', 'bar'); //=> true\ncontainsPath('foo/bar', 'qux'); //=> false\n\n// returns false for partial matches\ncontainsPath('foobar', 'foo');  //=> false\ncontainsPath('foo.bar', 'foo'); //=> false\ncontainsPath('foo.bar', 'bar'); //=> false\n\n// prefix with \"./\" to match from beginning of filepath\ncontainsPath('bar/foo', 'foo');   //=> true\ncontainsPath('bar/foo', './foo'); //=> false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(377, 'containsPath', containsPath, 0);
            var containsPath = J$.X1(41, J$.W(33, 'containsPath', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'contains-path', 21, false)), containsPath, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'containsPath', containsPath, 1), 0)(J$.T(57, 'foo/bar', 21, false), J$.T(65, 'foo', 21, false)));
            J$.X1(121, J$.F(113, J$.R(89, 'containsPath', containsPath, 1), 0)(J$.T(97, 'foo/bar', 21, false), J$.T(105, 'bar', 21, false)));
            J$.X1(161, J$.F(153, J$.R(129, 'containsPath', containsPath, 1), 0)(J$.T(137, 'foo/bar', 21, false), J$.T(145, 'qux', 21, false)));
            J$.X1(201, J$.F(193, J$.R(169, 'containsPath', containsPath, 1), 0)(J$.T(177, 'foobar', 21, false), J$.T(185, 'foo', 21, false)));
            J$.X1(241, J$.F(233, J$.R(209, 'containsPath', containsPath, 1), 0)(J$.T(217, 'foo.bar', 21, false), J$.T(225, 'foo', 21, false)));
            J$.X1(281, J$.F(273, J$.R(249, 'containsPath', containsPath, 1), 0)(J$.T(257, 'foo.bar', 21, false), J$.T(265, 'bar', 21, false)));
            J$.X1(321, J$.F(313, J$.R(289, 'containsPath', containsPath, 1), 0)(J$.T(297, 'bar/foo', 21, false), J$.T(305, 'foo', 21, false)));
            J$.X1(361, J$.F(353, J$.R(329, 'containsPath', containsPath, 1), 0)(J$.T(337, 'bar/foo', 21, false), J$.T(345, './foo', 21, false)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
