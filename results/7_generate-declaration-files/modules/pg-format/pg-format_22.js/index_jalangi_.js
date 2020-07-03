J$.iids = {"9":[1,14,1,21],"17":[1,22,1,33],"25":[1,14,1,34],"33":[1,14,1,34],"41":[1,14,1,34],"49":[3,17,3,18],"57":[3,20,3,21],"65":[3,23,3,24],"73":[3,15,3,26],"81":[3,15,3,26],"89":[3,15,3,26],"97":[4,21,4,22],"105":[4,27,4,28],"113":[4,16,4,30],"121":[4,16,4,30],"129":[4,16,4,30],"137":[5,23,5,26],"145":[5,28,5,29],"153":[5,22,5,30],"161":[5,33,5,36],"169":[5,38,5,39],"177":[5,32,5,40],"185":[5,21,5,41],"193":[5,21,5,41],"201":[5,21,5,41],"209":[7,11,7,17],"217":[7,18,7,64],"225":[7,66,7,73],"233":[7,75,7,83],"241":[7,11,7,84],"249":[7,11,7,84],"257":[7,11,7,84],"265":[8,1,8,8],"273":[8,13,8,16],"281":[8,1,8,17],"283":[8,1,8,12],"289":[8,1,8,18],"297":[10,7,10,13],"305":[10,14,10,51],"313":[10,53,10,66],"321":[10,7,10,67],"329":[10,7,10,67],"337":[10,1,10,68],"345":[11,1,11,8],"353":[11,13,11,16],"361":[11,1,11,17],"363":[11,1,11,12],"369":[11,1,11,18],"377":[1,1,12,1],"385":[1,1,12,1],"393":[1,1,12,1],"401":[1,1,12,1],"409":[1,1,12,1],"417":[1,1,12,1],"425":[1,1,12,1],"433":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var format = require('pg-format');\n\nvar myArray = [ 1, 2, 3 ];\nvar myObject = { a: 1, b: 2 };\nvar myNestedArray = [['a', 1], ['b', 2]];\n\nvar sql = format('SELECT * FROM t WHERE c1 IN (%L) AND c2 = %L', myArray, myObject);\nconsole.log(sql); // SELECT * FROM t WHERE c1 IN ('1','2','3') AND c2 = '{\"a\":1,\"b\":2}'\n\nsql = format('INSERT INTO t (name, age) VALUES %L', myNestedArray); \nconsole.log(sql); // INSERT INTO t (name, age) VALUES ('a', '1'), ('b', '2')\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'format', format, 0);
            J$.N(393, 'myArray', myArray, 0);
            J$.N(401, 'myObject', myObject, 0);
            J$.N(409, 'myNestedArray', myNestedArray, 0);
            J$.N(417, 'sql', sql, 0);
            var format = J$.X1(41, J$.W(33, 'format', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'pg-format', 21, false)), format, 3));
            var myArray = J$.X1(89, J$.W(81, 'myArray', J$.T(73, [
                J$.T(49, 1, 22, false),
                J$.T(57, 2, 22, false),
                J$.T(65, 3, 22, false)
            ], 10, false), myArray, 3));
            var myObject = J$.X1(129, J$.W(121, 'myObject', J$.T(113, {
                a: J$.T(97, 1, 22, false),
                b: J$.T(105, 2, 22, false)
            }, 11, false), myObject, 3));
            var myNestedArray = J$.X1(201, J$.W(193, 'myNestedArray', J$.T(185, [
                J$.T(153, [
                    J$.T(137, 'a', 21, false),
                    J$.T(145, 1, 22, false)
                ], 10, false),
                J$.T(177, [
                    J$.T(161, 'b', 21, false),
                    J$.T(169, 2, 22, false)
                ], 10, false)
            ], 10, false), myNestedArray, 3));
            var sql = J$.X1(257, J$.W(249, 'sql', J$.F(241, J$.R(209, 'format', format, 1), 0)(J$.T(217, 'SELECT * FROM t WHERE c1 IN (%L) AND c2 = %L', 21, false), J$.R(225, 'myArray', myArray, 1), J$.R(233, 'myObject', myObject, 1)), sql, 3));
            J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.R(273, 'sql', sql, 1)));
            J$.X1(337, sql = J$.W(329, 'sql', J$.F(321, J$.R(297, 'format', format, 1), 0)(J$.T(305, 'INSERT INTO t (name, age) VALUES %L', 21, false), J$.R(313, 'myNestedArray', myNestedArray, 1)), sql, 2));
            J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'log', 0)(J$.R(353, 'sql', sql, 1)));
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
