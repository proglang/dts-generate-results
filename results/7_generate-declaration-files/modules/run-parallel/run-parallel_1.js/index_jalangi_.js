J$.iids = {"9":[1,16,1,23],"17":[1,24,1,38],"25":[1,16,1,39],"33":[1,16,1,39],"41":[1,16,1,39],"49":[3,1,3,9],"57":[5,5,5,15],"65":[6,7,6,15],"73":[6,16,6,20],"81":[6,22,6,27],"89":[6,7,6,28],"97":[6,7,6,28],"105":[5,16,7,6],"113":[5,16,7,6],"121":[5,16,7,6],"129":[7,8,7,11],"137":[5,5,7,12],"145":[5,5,7,12],"153":[4,3,8,4],"161":[4,3,8,4],"169":[4,3,8,4],"177":[4,3,8,4],"185":[10,5,10,15],"193":[11,7,11,15],"201":[11,16,11,20],"209":[11,22,11,27],"217":[11,7,11,28],"225":[11,7,11,28],"233":[10,16,12,6],"241":[10,16,12,6],"249":[10,16,12,6],"257":[12,8,12,11],"265":[10,5,12,12],"273":[10,5,12,12],"281":[9,3,13,4],"289":[9,3,13,4],"297":[9,3,13,4],"305":[9,3,13,4],"313":[3,10,14,2],"321":[16,1,19,2],"329":[16,1,19,2],"337":[16,1,19,2],"345":[16,1,19,2],"353":[16,1,19,2],"361":[3,1,19,3],"369":[3,1,19,3],"377":[1,1,20,1],"385":[1,1,20,1],"393":[5,16,7,6],"401":[5,16,7,6],"409":[4,3,8,4],"417":[4,3,8,4],"425":[10,16,12,6],"433":[10,16,12,6],"441":[9,3,13,4],"449":[9,3,13,4],"457":[16,1,19,2],"465":[16,1,19,2],"473":[1,1,20,1],"481":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parallel = require('run-parallel')\n\nparallel([\n  function (callback) {\n    setTimeout(function () {\n      callback(null, 'one')\n    }, 200)\n  },\n  function (callback) {\n    setTimeout(function () {\n      callback(null, 'two')\n    }, 100)\n  }\n],\n// optional callback\nfunction (err, results) {\n  // the results array will equal ['one','two'] even though\n  // the second function had a shorter timeout.\n})\n"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'parallel', parallel, 0);
            var parallel = J$.X1(41, J$.W(33, 'parallel', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'run-parallel', 21, false)), parallel, 3));
            J$.X1(369, J$.F(361, J$.R(49, 'parallel', parallel, 1), 0)(J$.T(313, [
                J$.T(177, function (callback) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(153, arguments.callee, this, arguments);
                                arguments = J$.N(161, 'arguments', arguments, 4);
                                callback = J$.N(169, 'callback', callback, 4);
                                J$.X1(145, J$.F(137, J$.R(57, 'setTimeout', setTimeout, 2), 0)(J$.T(121, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(105, arguments.callee, this, arguments);
                                                arguments = J$.N(113, 'arguments', arguments, 4);
                                                J$.X1(97, J$.F(89, J$.R(65, 'callback', callback, 0), 0)(J$.T(73, null, 25, false), J$.T(81, 'one', 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(393, J$e);
                                            } finally {
                                                if (J$.Fr(401))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 105), J$.T(129, 200, 22, false)));
                            } catch (J$e) {
                                J$.Ex(409, J$e);
                            } finally {
                                if (J$.Fr(417))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 153),
                J$.T(305, function (callback) {
                    jalangiLabel3:
                        while (true) {
                            try {
                                J$.Fe(281, arguments.callee, this, arguments);
                                arguments = J$.N(289, 'arguments', arguments, 4);
                                callback = J$.N(297, 'callback', callback, 4);
                                J$.X1(273, J$.F(265, J$.R(185, 'setTimeout', setTimeout, 2), 0)(J$.T(249, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(233, arguments.callee, this, arguments);
                                                arguments = J$.N(241, 'arguments', arguments, 4);
                                                J$.X1(225, J$.F(217, J$.R(193, 'callback', callback, 0), 0)(J$.T(201, null, 25, false), J$.T(209, 'two', 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(425, J$e);
                                            } finally {
                                                if (J$.Fr(433))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 233), J$.T(257, 100, 22, false)));
                            } catch (J$e) {
                                J$.Ex(441, J$e);
                            } finally {
                                if (J$.Fr(449))
                                    continue jalangiLabel3;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 281)
            ], 10, false), J$.T(353, function (err, results) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            err = J$.N(337, 'err', err, 4);
                            results = J$.N(345, 'results', results, 4);
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321)));
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
