J$.iids = {"9":[1,16,1,23],"17":[1,24,1,34],"25":[1,16,1,35],"33":[2,19,2,26],"41":[2,27,2,35],"49":[2,19,2,36],"57":[2,14,2,50],"59":[2,19,2,49],"65":[1,16,1,35],"73":[1,16,1,35],"81":[2,14,2,50],"89":[2,14,2,50],"97":[4,1,4,7],"105":[4,13,4,21],"113":[4,13,4,25],"121":[4,1,4,26],"123":[4,1,4,12],"129":[5,18,5,26],"137":[5,18,5,30],"145":[5,31,5,35],"153":[5,18,5,36],"161":[5,18,5,36],"169":[5,18,5,36],"177":[6,3,6,11],"185":[6,3,6,15],"193":[6,16,6,20],"201":[7,16,7,24],"209":[7,31,7,35],"217":[7,37,7,46],"225":[7,16,7,47],"227":[7,16,7,30],"233":[7,16,7,47],"241":[7,16,7,47],"249":[8,5,8,11],"257":[8,17,8,21],"265":[8,17,8,26],"273":[8,28,8,32],"281":[8,5,8,33],"283":[8,5,8,16],"289":[8,5,8,34],"297":[9,12,9,16],"305":[9,12,9,16],"313":[9,5,9,17],"321":[6,24,10,4],"329":[6,24,10,4],"337":[6,24,10,4],"345":[6,24,10,4],"353":[6,3,10,4],"361":[6,3,10,5],"369":[4,35,11,2],"377":[4,35,11,2],"385":[4,35,11,2],"393":[4,35,11,2],"401":[4,35,11,2],"409":[4,1,11,3],"411":[4,1,4,34],"417":[4,1,11,4],"425":[12,1,12,7],"433":[12,11,12,23],"441":[12,42,12,49],"449":[12,54,12,58],"457":[12,42,12,59],"459":[12,42,12,53],"465":[12,42,12,60],"473":[12,25,12,62],"481":[12,25,12,62],"489":[12,25,12,62],"497":[12,25,12,62],"505":[12,1,12,63],"507":[12,1,12,10],"513":[12,1,12,64],"521":[13,1,13,9],"529":[13,16,13,27],"537":[13,1,13,28],"539":[13,1,13,15],"545":[13,1,13,29],"553":[1,1,14,1],"561":[1,1,14,1],"569":[1,1,14,1],"577":[6,24,10,4],"585":[6,24,10,4],"593":[4,35,11,2],"601":[4,35,11,2],"609":[12,25,12,62],"617":[12,25,12,62],"625":[1,1,14,1],"633":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var luaparse = require('luaparse'),\n    events = new (require('events').EventEmitter);\n\nObject.keys(luaparse.ast).forEach(function(type) {\n  var original = luaparse.ast[type];\n  luaparse.ast[type] = function() {\n    var node = original.apply(null, arguments);\n    events.emit(node.type, node);\n    return node;\n  };\n});\nevents.on('Identifier', function(node) { console.log(node); });\nluaparse.parse('i = \"foo\"');\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(553, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(561, 'luaparse', luaparse, 0);
            J$.N(569, 'events', events, 0);
            var luaparse = J$.X1(73, J$.W(65, 'luaparse', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'luaparse', 21, false)), luaparse, 3)), events = J$.X1(89, J$.W(81, 'events', J$.M(57, J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'events', 21, false)), 'EventEmitter', 2)(), events, 3));
            J$.X1(417, J$.M(409, J$.M(121, J$.R(97, 'Object', Object, 2), 'keys', 0)(J$.G(113, J$.R(105, 'luaparse', luaparse, 1), 'ast', 0)), 'forEach', 0)(J$.T(401, function (type) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(369, arguments.callee, this, arguments);
                            arguments = J$.N(377, 'arguments', arguments, 4);
                            type = J$.N(385, 'type', type, 4);
                            J$.N(393, 'original', original, 0);
                            var original = J$.X1(169, J$.W(161, 'original', J$.G(153, J$.G(137, J$.R(129, 'luaparse', luaparse, 1), 'ast', 0), J$.R(145, 'type', type, 0), 4), original, 1));
                            J$.X1(361, J$.P(353, J$.G(185, J$.R(177, 'luaparse', luaparse, 1), 'ast', 0), J$.R(193, 'type', type, 0), J$.T(345, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(321, arguments.callee, this, arguments);
                                            arguments = J$.N(329, 'arguments', arguments, 4);
                                            J$.N(337, 'node', node, 0);
                                            var node = J$.X1(241, J$.W(233, 'node', J$.M(225, J$.R(201, 'original', original, 0), 'apply', 0)(J$.T(209, null, 25, false), J$.R(217, 'arguments', arguments, 2)), node, 1));
                                            J$.X1(289, J$.M(281, J$.R(249, 'events', events, 1), 'emit', 0)(J$.G(265, J$.R(257, 'node', node, 0), 'type', 0), J$.R(273, 'node', node, 0)));
                                            return J$.X1(313, J$.Rt(305, J$.R(297, 'node', node, 0)));
                                        } catch (J$e) {
                                            J$.Ex(577, J$e);
                                        } finally {
                                            if (J$.Fr(585))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 321), 2));
                        } catch (J$e) {
                            J$.Ex(593, J$e);
                        } finally {
                            if (J$.Fr(601))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 369)));
            J$.X1(513, J$.M(505, J$.R(425, 'events', events, 1), 'on', 0)(J$.T(433, 'Identifier', 21, false), J$.T(497, function (node) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(473, arguments.callee, this, arguments);
                            arguments = J$.N(481, 'arguments', arguments, 4);
                            node = J$.N(489, 'node', node, 4);
                            J$.X1(465, J$.M(457, J$.R(441, 'console', console, 2), 'log', 0)(J$.R(449, 'node', node, 0)));
                        } catch (J$e) {
                            J$.Ex(609, J$e);
                        } finally {
                            if (J$.Fr(617))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 473)));
            J$.X1(545, J$.M(537, J$.R(521, 'luaparse', luaparse, 1), 'parse', 0)(J$.T(529, 'i = "foo"', 21, false)));
        } catch (J$e) {
            J$.Ex(625, J$e);
        } finally {
            if (J$.Sr(633)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
