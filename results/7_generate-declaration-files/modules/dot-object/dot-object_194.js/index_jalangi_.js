J$.iids = {"9":[1,11,1,18],"17":[1,19,1,31],"25":[1,11,1,32],"33":[1,11,1,32],"41":[1,11,1,32],"49":[4,7,4,14],"57":[5,24,5,28],"65":[5,15,5,30],"73":[5,8,5,32],"81":[6,29,6,30],"89":[6,20,6,32],"97":[6,10,6,34],"105":[7,19,7,22],"113":[7,24,7,27],"121":[7,18,7,28],"129":[7,9,7,30],"137":[3,11,8,2],"145":[3,11,8,2],"153":[3,11,8,2],"161":[10,11,10,14],"169":[10,19,10,22],"177":[10,11,10,23],"179":[10,11,10,18],"185":[10,11,10,23],"193":[10,11,10,23],"201":[14,11,14,13],"209":[14,11,14,13],"217":[14,11,14,13],"225":[15,1,15,4],"233":[15,9,15,12],"241":[15,14,15,17],"249":[15,1,15,18],"251":[15,1,15,8],"257":[15,1,15,19],"265":[17,1,17,8],"273":[17,13,17,16],"281":[17,1,17,17],"283":[17,1,17,12],"289":[17,1,17,18],"297":[1,1,18,1],"305":[1,1,18,1],"313":[1,1,18,1],"321":[1,1,18,1],"329":[1,1,18,1],"337":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var dot = require('dot-object');\n\nvar obj = {\n  id: 'my-id',\n  nes: { ted: { value: true } },\n  other: { nested: { stuff: 5 } },\n  some: { array: ['A', 'B'] }\n};\n\nvar tgt = dot.dot(obj);\n\n// or\n\nvar tgt = {};\ndot.dot(obj, tgt);\n\nconsole.log(tgt);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'dot', dot, 0);
            J$.N(313, 'obj', obj, 0);
            J$.N(321, 'tgt', tgt, 0);
            var dot = J$.X1(41, J$.W(33, 'dot', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'dot-object', 21, false)), dot, 3));
            var obj = J$.X1(153, J$.W(145, 'obj', J$.T(137, {
                id: J$.T(49, 'my-id', 21, false),
                nes: J$.T(73, {
                    ted: J$.T(65, {
                        value: J$.T(57, true, 23, false)
                    }, 11, false)
                }, 11, false),
                other: J$.T(97, {
                    nested: J$.T(89, {
                        stuff: J$.T(81, 5, 22, false)
                    }, 11, false)
                }, 11, false),
                some: J$.T(129, {
                    array: J$.T(121, [
                        J$.T(105, 'A', 21, false),
                        J$.T(113, 'B', 21, false)
                    ], 10, false)
                }, 11, false)
            }, 11, false), obj, 3));
            var tgt = J$.X1(193, J$.W(185, 'tgt', J$.M(177, J$.R(161, 'dot', dot, 1), 'dot', 0)(J$.R(169, 'obj', obj, 1)), tgt, 3));
            var tgt = J$.X1(217, J$.W(209, 'tgt', J$.T(201, {}, 11, false), tgt, 3));
            J$.X1(257, J$.M(249, J$.R(225, 'dot', dot, 1), 'dot', 0)(J$.R(233, 'obj', obj, 1), J$.R(241, 'tgt', tgt, 1)));
            J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.R(273, 'tgt', tgt, 1)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
