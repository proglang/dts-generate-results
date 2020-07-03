J$.iids = {"8":[43,6,43,44],"9":[1,12,1,19],"10":[43,6,43,23],"16":[43,6,43,44],"17":[1,20,1,33],"18":[43,27,43,44],"25":[1,12,1,34],"26":[44,10,44,37],"33":[1,12,1,34],"34":[46,9,46,16],"41":[1,12,1,34],"49":[4,9,4,10],"57":[5,9,5,11],"65":[6,10,6,19],"73":[7,9,7,10],"81":[3,9,8,2],"89":[3,9,8,2],"97":[3,9,8,2],"105":[11,9,11,10],"113":[12,9,12,11],"121":[13,9,13,18],"129":[14,10,14,12],"137":[10,9,15,2],"145":[10,9,15,2],"153":[10,9,15,2],"161":[17,1,17,5],"169":[17,6,17,7],"177":[17,9,17,10],"185":[17,1,17,11],"193":[17,1,17,12],"201":[29,12,29,38],"209":[29,12,29,38],"217":[29,12,29,38],"225":[31,1,31,5],"233":[32,9,32,28],"241":[31,13,33,2],"249":[34,12,34,16],"257":[34,17,34,21],"265":[34,8,34,22],"273":[33,4,35,2],"281":[36,12,36,16],"289":[36,17,36,21],"297":[36,8,36,22],"305":[35,4,37,2],"313":[31,1,37,3],"315":[31,1,31,12],"321":[31,1,37,4],"329":[43,6,43,7],"337":[43,19,43,23],"345":[43,27,43,28],"353":[43,40,43,44],"361":[44,10,44,11],"369":[44,10,44,21],"371":[44,10,44,19],"377":[44,26,44,27],"385":[44,26,44,37],"387":[44,26,44,35],"393":[44,10,44,37],"401":[44,3,44,38],"409":[46,9,46,10],"417":[46,15,46,16],"425":[46,9,46,16],"433":[46,2,46,17],"441":[42,1,47,2],"449":[42,1,47,2],"457":[42,1,47,2],"465":[42,1,47,2],"473":[1,1,49,1],"481":[1,1,49,1],"489":[1,1,49,1],"497":[1,1,49,1],"505":[1,1,49,1],"513":[42,1,47,2],"521":[1,1,49,1],"529":[43,2,44,38],"537":[42,1,47,2],"545":[42,1,47,2],"553":[1,1,49,1],"561":[1,1,49,1],"nBranches":4,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var diff = require('object-diff');\n\nvar a = {\n\tspeed: 4,\n\tpower: 54,\n\theight: undefined,\n\tlevel: 1,\n};\n\nvar b = {\n\tspeed: 4,\t\t\t// unchanged\n\tpower: 22,\t\t\t// changed\n\tlevel: undefined,\t// changed\n\tweight: 10,\t\t\t// added\n};\n\ndiff(a, b);\n/*\n{\n\tpower: 22,\n\tlevel: undefined,\n\tweight: 10,\n}\n*/\n\n\n// using a custom equality function\n\nvar past = '2016-04-24T10:39:23.419Z';\n\ndiff.custom({\n\tequal: dateAwareComparator,\n}, {\n\tthen: new Date(past),\n}, {\n\tthen: new Date(past),\n});\n/*\n{}\n*/\n\nfunction dateAwareComparator( a, b ){\n\tif (a instanceof Date && b instanceof Date)\n\t\treturn a.getTime() === b.getTime();\n\n\treturn a === b;\n}\n\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(473, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            function dateAwareComparator(a, b) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(441, arguments.callee, this, arguments);
                            arguments = J$.N(449, 'arguments', arguments, 4);
                            a = J$.N(457, 'a', a, 4);
                            b = J$.N(465, 'b', b, 4);
                            if (J$.X1(529, J$.C(16, J$.C(8, J$.B(10, 'instanceof', J$.R(329, 'a', a, 0), J$.R(337, 'Date', Date, 2), 0)) ? J$.B(18, 'instanceof', J$.R(345, 'b', b, 0), J$.R(353, 'Date', Date, 2), 0) : J$._())))
                                return J$.X1(401, J$.Rt(393, J$.B(26, '===', J$.M(369, J$.R(361, 'a', a, 0), 'getTime', 0)(), J$.M(385, J$.R(377, 'b', b, 0), 'getTime', 0)(), 0)));
                            return J$.X1(433, J$.Rt(425, J$.B(34, '===', J$.R(409, 'a', a, 0), J$.R(417, 'b', b, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(537, J$e);
                        } finally {
                            if (J$.Fr(545))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(481, 'diff', diff, 0);
            J$.N(489, 'a', a, 0);
            J$.N(497, 'b', b, 0);
            J$.N(505, 'past', past, 0);
            dateAwareComparator = J$.N(521, 'dateAwareComparator', J$.T(513, dateAwareComparator, 12, false, 441), 0);
            var diff = J$.X1(41, J$.W(33, 'diff', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'object-diff', 21, false)), diff, 3));
            var a = J$.X1(97, J$.W(89, 'a', J$.T(81, {
                speed: J$.T(49, 4, 22, false),
                power: J$.T(57, 54, 22, false),
                height: J$.T(65, undefined, 24, false),
                level: J$.T(73, 1, 22, false)
            }, 11, false), a, 3));
            var b = J$.X1(153, J$.W(145, 'b', J$.T(137, {
                speed: J$.T(105, 4, 22, false),
                power: J$.T(113, 22, 22, false),
                level: J$.T(121, undefined, 24, false),
                weight: J$.T(129, 10, 22, false)
            }, 11, false), b, 3));
            J$.X1(193, J$.F(185, J$.R(161, 'diff', diff, 1), 0)(J$.R(169, 'a', a, 1), J$.R(177, 'b', b, 1)));
            var past = J$.X1(217, J$.W(209, 'past', J$.T(201, '2016-04-24T10:39:23.419Z', 21, false), past, 3));
            J$.X1(321, J$.M(313, J$.R(225, 'diff', diff, 1), 'custom', 0)(J$.T(241, {
                equal: J$.R(233, 'dateAwareComparator', dateAwareComparator, 1)
            }, 11, false), J$.T(273, {
                then: J$.F(265, J$.R(249, 'Date', Date, 2), 1)(J$.R(257, 'past', past, 1))
            }, 11, false), J$.T(305, {
                then: J$.F(297, J$.R(281, 'Date', Date, 2), 1)(J$.R(289, 'past', past, 1))
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(553, J$e);
        } finally {
            if (J$.Sr(561)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
