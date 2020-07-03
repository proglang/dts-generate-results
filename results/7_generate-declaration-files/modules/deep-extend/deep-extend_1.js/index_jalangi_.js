J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[3,6,3,7],"57":[4,6,4,7],"65":[6,8,6,9],"73":[7,8,7,10],"81":[8,17,8,20],"89":[8,29,8,32],"97":[8,8,8,34],"105":[5,6,9,4],"113":[10,6,10,7],"121":[11,6,11,9],"129":[12,6,12,9],"137":[13,7,13,8],"145":[13,10,13,11],"153":[13,6,13,12],"161":[2,12,14,2],"169":[2,12,14,2],"177":[2,12,14,2],"185":[16,6,16,7],"193":[17,6,17,7],"201":[19,17,19,22],"209":[19,32,19,37],"217":[19,8,19,39],"225":[20,17,20,20],"233":[20,8,20,22],"241":[18,6,21,4],"249":[22,13,22,14],"257":[22,21,22,22],"265":[22,6,22,24],"273":[23,6,23,8],"281":[24,12,24,13],"289":[25,6,25,12],"297":[26,6,26,10],"305":[27,7,27,8],"313":[27,10,27,11],"321":[27,6,27,12],"329":[15,12,28,2],"337":[15,12,28,2],"345":[15,12,28,2],"353":[30,1,30,11],"361":[30,12,30,16],"369":[30,18,30,22],"377":[30,1,30,23],"385":[30,1,30,24],"393":[32,1,32,8],"401":[32,13,32,17],"409":[32,1,32,18],"411":[32,1,32,12],"417":[32,1,32,19],"425":[1,1,48,1],"433":[1,1,48,1],"441":[1,1,48,1],"449":[1,1,48,1],"457":[1,1,48,1],"465":[1,1,48,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var deepExtend = require('deep-extend');\nvar obj1 = {\n  a: 1,\n  b: 2,\n  d: {\n    a: 1,\n    b: [],\n    c: { test1: 123, test2: 321 }\n  },\n  f: 5,\n  g: 123,\n  i: 321,\n  j: [1, 2]\n};\nvar obj2 = {\n  b: 3,\n  c: 5,\n  d: {\n    b: { first: 'one', second: 'two' },\n    c: { test2: 222 }\n  },\n  e: { one: 1, two: 2 },\n  f: [],\n  g: (void 0),\n  h: /abc/g,\n  i: null,\n  j: [3, 4]\n};\n\ndeepExtend(obj1, obj2);\n\nconsole.log(obj1);\n/*\n{ a: 1,\n  b: 3,\n  d:\n   { a: 1,\n     b: { first: 'one', second: 'two' },\n     c: { test1: 123, test2: 222 } },\n  f: [],\n  g: undefined,\n  c: 5,\n  e: { one: 1, two: 2 },\n  h: /abc/g,\n  i: null,\n  j: [3, 4] }\n*/\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(425, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(433, 'deepExtend', deepExtend, 0);
            J$.N(441, 'obj1', obj1, 0);
            J$.N(449, 'obj2', obj2, 0);
            var deepExtend = J$.X1(41, J$.W(33, 'deepExtend', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'deep-extend', 21, false)), deepExtend, 3));
            var obj1 = J$.X1(177, J$.W(169, 'obj1', J$.T(161, {
                a: J$.T(49, 1, 22, false),
                b: J$.T(57, 2, 22, false),
                d: J$.T(105, {
                    a: J$.T(65, 1, 22, false),
                    b: J$.T(73, [], 10, false),
                    c: J$.T(97, {
                        test1: J$.T(81, 123, 22, false),
                        test2: J$.T(89, 321, 22, false)
                    }, 11, false)
                }, 11, false),
                f: J$.T(113, 5, 22, false),
                g: J$.T(121, 123, 22, false),
                i: J$.T(129, 321, 22, false),
                j: J$.T(153, [
                    J$.T(137, 1, 22, false),
                    J$.T(145, 2, 22, false)
                ], 10, false)
            }, 11, false), obj1, 3));
            var obj2 = J$.X1(345, J$.W(337, 'obj2', J$.T(329, {
                b: J$.T(185, 3, 22, false),
                c: J$.T(193, 5, 22, false),
                d: J$.T(241, {
                    b: J$.T(217, {
                        first: J$.T(201, 'one', 21, false),
                        second: J$.T(209, 'two', 21, false)
                    }, 11, false),
                    c: J$.T(233, {
                        test2: J$.T(225, 222, 22, false)
                    }, 11, false)
                }, 11, false),
                e: J$.T(265, {
                    one: J$.T(249, 1, 22, false),
                    two: J$.T(257, 2, 22, false)
                }, 11, false),
                f: J$.T(273, [], 10, false),
                g: void J$.T(281, 0, 22, false),
                h: J$.T(289, /abc/g, 14, false),
                i: J$.T(297, null, 25, false),
                j: J$.T(321, [
                    J$.T(305, 3, 22, false),
                    J$.T(313, 4, 22, false)
                ], 10, false)
            }, 11, false), obj2, 3));
            J$.X1(385, J$.F(377, J$.R(353, 'deepExtend', deepExtend, 1), 0)(J$.R(361, 'obj1', obj1, 1), J$.R(369, 'obj2', obj2, 1)));
            J$.X1(417, J$.M(409, J$.R(393, 'console', console, 2), 'log', 0)(J$.R(401, 'obj1', obj1, 1)));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
