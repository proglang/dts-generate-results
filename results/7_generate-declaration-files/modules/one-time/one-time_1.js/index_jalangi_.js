J$.iids = {"9":[1,11,1,18],"10":[19,3,19,44],"17":[1,19,1,29],"25":[1,11,1,30],"33":[1,11,1,30],"41":[1,11,1,30],"49":[4,8,4,11],"57":[4,12,4,14],"65":[4,8,4,15],"73":[4,8,4,15],"81":[4,3,4,16],"89":[6,3,6,15],"97":[6,21,6,27],"105":[6,29,6,31],"113":[6,3,6,32],"115":[6,3,6,20],"121":[6,3,6,33],"129":[7,3,7,15],"137":[7,21,7,28],"145":[7,30,7,32],"153":[7,3,7,33],"155":[7,3,7,20],"161":[7,3,7,34],"169":[10,3,10,15],"177":[10,21,10,28],"185":[10,34,10,39],"193":[10,40,10,76],"201":[10,30,10,77],"209":[10,3,10,78],"211":[10,3,10,20],"217":[10,3,10,79],"225":[11,3,11,15],"233":[11,21,11,27],"241":[11,3,11,28],"243":[11,3,11,20],"249":[11,3,11,29],"257":[3,1,12,2],"265":[3,1,12,2],"273":[3,1,12,2],"281":[3,1,12,2],"289":[15,8,15,11],"297":[15,12,15,14],"305":[15,8,15,15],"313":[15,8,15,15],"321":[15,3,15,16],"329":[17,3,17,5],"337":[17,3,17,7],"345":[17,3,17,8],"353":[18,3,18,5],"361":[18,6,18,35],"369":[18,3,18,36],"377":[18,3,18,37],"385":[19,3,19,5],"393":[19,6,19,33],"401":[19,3,19,34],"409":[19,39,19,44],"417":[19,3,19,45],"425":[20,3,20,5],"433":[20,6,20,13],"441":[20,3,20,14],"449":[20,3,20,15],"457":[21,3,21,5],"465":[21,6,21,13],"473":[21,3,21,14],"481":[21,3,21,15],"489":[22,3,22,5],"497":[22,6,22,12],"505":[22,3,22,13],"513":[22,3,22,14],"521":[23,3,23,5],"529":[23,6,23,11],"537":[23,3,23,12],"545":[23,3,23,13],"553":[24,3,24,5],"561":[24,6,24,10],"569":[24,3,24,11],"577":[24,3,24,12],"585":[14,1,25,2],"593":[14,1,25,2],"601":[14,1,25,2],"609":[27,1,27,8],"617":[28,10,28,15],"625":[28,10,28,15],"633":[28,3,28,15],"641":[27,9,29,2],"649":[27,9,29,2],"657":[27,9,29,2],"665":[27,1,29,3],"673":[27,1,29,4],"681":[1,1,30,1],"689":[1,1,30,1],"697":[3,1,12,2],"705":[1,1,30,1],"713":[14,1,25,2],"721":[1,1,30,1],"729":[3,1,12,2],"737":[3,1,12,2],"745":[14,1,25,2],"753":[14,1,25,2],"761":[27,9,29,2],"769":[27,9,29,2],"777":[1,1,30,1],"785":[1,1,30,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var one = require('one-time');\n\nfunction load(file, fn) {\n  fn = one(fn);\n\n  eventemitter.once('load', fn);\n  eventemitter.once('error', fn);\n\n  // do stuff\n  eventemitter.emit('error', new Error('Failed to load, but still finished'));\n  eventemitter.emit('load');\n}\n\nfunction example(fn) {\n  fn = one(fn);\n\n  fn();\n  fn('also receives all arguments');\n  fn('it returns the same value') === 'bar';\n  fn('never');\n  fn('gonna');\n  fn('give');\n  fn('you');\n  fn('up');\n}\n\nexample(function () {\n  return 'bar'\n});\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(681, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            function load(file, fn) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            file = J$.N(273, 'file', file, 4);
                            fn = J$.N(281, 'fn', fn, 4);
                            J$.X1(81, fn = J$.W(73, 'fn', J$.F(65, J$.R(49, 'one', one, 1), 0)(J$.R(57, 'fn', fn, 0)), fn, 0));
                            J$.X1(121, J$.M(113, J$.R(89, 'eventemitter', eventemitter, 2), 'once', 0)(J$.T(97, 'load', 21, false), J$.R(105, 'fn', fn, 0)));
                            J$.X1(161, J$.M(153, J$.R(129, 'eventemitter', eventemitter, 2), 'once', 0)(J$.T(137, 'error', 21, false), J$.R(145, 'fn', fn, 0)));
                            J$.X1(217, J$.M(209, J$.R(169, 'eventemitter', eventemitter, 2), 'emit', 0)(J$.T(177, 'error', 21, false), J$.F(201, J$.R(185, 'Error', Error, 2), 1)(J$.T(193, 'Failed to load, but still finished', 21, false))));
                            J$.X1(249, J$.M(241, J$.R(225, 'eventemitter', eventemitter, 2), 'emit', 0)(J$.T(233, 'load', 21, false)));
                        } catch (J$e) {
                            J$.Ex(729, J$e);
                        } finally {
                            if (J$.Fr(737))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function example(fn) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(585, arguments.callee, this, arguments);
                            arguments = J$.N(593, 'arguments', arguments, 4);
                            fn = J$.N(601, 'fn', fn, 4);
                            J$.X1(321, fn = J$.W(313, 'fn', J$.F(305, J$.R(289, 'one', one, 1), 0)(J$.R(297, 'fn', fn, 0)), fn, 0));
                            J$.X1(345, J$.F(337, J$.R(329, 'fn', fn, 0), 0)());
                            J$.X1(377, J$.F(369, J$.R(353, 'fn', fn, 0), 0)(J$.T(361, 'also receives all arguments', 21, false)));
                            J$.X1(417, J$.B(10, '===', J$.F(401, J$.R(385, 'fn', fn, 0), 0)(J$.T(393, 'it returns the same value', 21, false)), J$.T(409, 'bar', 21, false), 0));
                            J$.X1(449, J$.F(441, J$.R(425, 'fn', fn, 0), 0)(J$.T(433, 'never', 21, false)));
                            J$.X1(481, J$.F(473, J$.R(457, 'fn', fn, 0), 0)(J$.T(465, 'gonna', 21, false)));
                            J$.X1(513, J$.F(505, J$.R(489, 'fn', fn, 0), 0)(J$.T(497, 'give', 21, false)));
                            J$.X1(545, J$.F(537, J$.R(521, 'fn', fn, 0), 0)(J$.T(529, 'you', 21, false)));
                            J$.X1(577, J$.F(569, J$.R(553, 'fn', fn, 0), 0)(J$.T(561, 'up', 21, false)));
                        } catch (J$e) {
                            J$.Ex(745, J$e);
                        } finally {
                            if (J$.Fr(753))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(689, 'one', one, 0);
            load = J$.N(705, 'load', J$.T(697, load, 12, false, 257), 0);
            example = J$.N(721, 'example', J$.T(713, example, 12, false, 585), 0);
            var one = J$.X1(41, J$.W(33, 'one', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'one-time', 21, false)), one, 3));
            J$.X1(673, J$.F(665, J$.R(609, 'example', example, 1), 0)(J$.T(657, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(641, arguments.callee, this, arguments);
                            arguments = J$.N(649, 'arguments', arguments, 4);
                            return J$.X1(633, J$.Rt(625, J$.T(617, 'bar', 21, false)));
                        } catch (J$e) {
                            J$.Ex(761, J$e);
                        } finally {
                            if (J$.Fr(769))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 641)));
        } catch (J$e) {
            J$.Ex(777, J$e);
        } finally {
            if (J$.Sr(785)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
