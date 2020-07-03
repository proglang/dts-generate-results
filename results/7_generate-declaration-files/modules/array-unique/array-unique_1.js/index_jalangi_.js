J$.iids = {"9":[1,14,1,21],"17":[1,22,1,36],"25":[1,14,1,37],"33":[1,14,1,37],"41":[1,14,1,37],"49":[3,12,3,15],"57":[3,17,3,20],"65":[3,22,3,25],"73":[3,27,3,30],"81":[3,11,3,31],"89":[3,11,3,31],"97":[3,11,3,31],"105":[4,1,4,8],"113":[4,13,4,19],"121":[4,20,4,23],"129":[4,13,4,24],"137":[4,1,4,25],"139":[4,1,4,12],"145":[4,1,4,25],"153":[5,1,5,8],"161":[5,13,5,16],"169":[5,1,5,17],"171":[5,1,5,12],"177":[5,1,5,17],"185":[8,14,8,21],"193":[8,22,8,36],"201":[8,14,8,37],"209":[8,14,8,47],"217":[8,14,8,47],"225":[8,14,8,47],"233":[10,12,10,15],"241":[10,17,10,20],"249":[10,22,10,25],"257":[10,27,10,30],"265":[10,11,10,31],"273":[10,11,10,31],"281":[10,11,10,31],"289":[11,1,11,8],"297":[11,13,11,19],"305":[11,20,11,23],"313":[11,13,11,24],"321":[11,1,11,25],"323":[11,1,11,12],"329":[11,1,11,25],"337":[12,1,12,8],"345":[12,13,12,16],"353":[12,1,12,17],"355":[12,1,12,12],"361":[12,1,12,17],"369":[1,1,13,1],"377":[1,1,13,1],"385":[1,1,13,1],"393":[1,1,13,1],"401":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var unique = require('array-unique');\n\nvar arr = ['a', 'b', 'c', 'c'];\nconsole.log(unique(arr)) //=> ['a', 'b', 'c']\nconsole.log(arr)         //=> ['a', 'b', 'c']\n\n/* The above modifies the input array. To prevent that at a slight performance cost: */\nvar unique = require(\"array-unique\").immutable;\n\nvar arr = ['a', 'b', 'c', 'c'];\nconsole.log(unique(arr)) //=> ['a', 'b', 'c']\nconsole.log(arr)         //=> ['a', 'b', 'c', 'c']\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(377, 'unique', unique, 0);
            J$.N(385, 'arr', arr, 0);
            var unique = J$.X1(41, J$.W(33, 'unique', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'array-unique', 21, false)), unique, 3));
            var arr = J$.X1(97, J$.W(89, 'arr', J$.T(81, [
                J$.T(49, 'a', 21, false),
                J$.T(57, 'b', 21, false),
                J$.T(65, 'c', 21, false),
                J$.T(73, 'c', 21, false)
            ], 10, false), arr, 3));
            J$.X1(145, J$.M(137, J$.R(105, 'console', console, 2), 'log', 0)(J$.F(129, J$.R(113, 'unique', unique, 1), 0)(J$.R(121, 'arr', arr, 1))));
            J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.R(161, 'arr', arr, 1)));
            var unique = J$.X1(225, J$.W(217, 'unique', J$.G(209, J$.F(201, J$.R(185, 'require', require, 2), 0)(J$.T(193, "array-unique", 21, false)), 'immutable', 0), unique, 3));
            var arr = J$.X1(281, J$.W(273, 'arr', J$.T(265, [
                J$.T(233, 'a', 21, false),
                J$.T(241, 'b', 21, false),
                J$.T(249, 'c', 21, false),
                J$.T(257, 'c', 21, false)
            ], 10, false), arr, 3));
            J$.X1(329, J$.M(321, J$.R(289, 'console', console, 2), 'log', 0)(J$.F(313, J$.R(297, 'unique', unique, 1), 0)(J$.R(305, 'arr', arr, 1))));
            J$.X1(361, J$.M(353, J$.R(337, 'console', console, 2), 'log', 0)(J$.R(345, 'arr', arr, 1)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
