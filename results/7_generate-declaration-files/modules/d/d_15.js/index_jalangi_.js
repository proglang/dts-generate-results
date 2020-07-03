J$.iids = {"9":[1,9,1,16],"17":[1,17,1,20],"25":[1,9,1,21],"33":[1,9,1,21],"41":[1,9,1,21],"49":[3,15,3,29],"57":[3,15,3,29],"65":[3,15,3,29],"73":[3,15,3,29],"81":[3,15,3,29],"89":[4,1,4,7],"97":[4,25,4,32],"105":[4,25,4,42],"113":[5,12,5,13],"121":[5,14,7,4],"129":[5,14,7,4],"137":[5,14,7,4],"145":[5,12,7,5],"153":[8,13,8,14],"161":[8,15,10,4],"169":[8,15,10,4],"177":[8,15,10,4],"185":[8,13,10,5],"193":[11,12,11,13],"201":[11,17,13,4],"209":[11,17,13,4],"217":[11,17,13,4],"225":[11,12,13,5],"227":[11,12,11,16],"233":[4,44,14,2],"241":[4,1,14,3],"243":[4,1,4,24],"249":[4,1,14,4],"257":[1,1,15,1],"265":[1,1,15,1],"273":[1,1,15,1],"281":[3,15,3,29],"289":[3,15,3,29],"297":[5,14,7,4],"305":[5,14,7,4],"313":[8,15,10,4],"321":[8,15,10,4],"329":[11,17,13,4],"337":[11,17,13,4],"345":[1,1,15,1],"353":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var d = require('d');\n\nvar Account = function () {};\nObject.defineProperties(Account.prototype, {\n  deposit: d(function () {\n    /* ... */\n  }),\n  withdraw: d(function () {\n    /* ... */\n  }),\n  balance: d.gs(function () {\n    /* ... */\n  })\n});\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(257, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(265, 'd', d, 0);
            J$.N(273, 'Account', Account, 0);
            var d = J$.X1(41, J$.W(33, 'd', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'd', 21, false)), d, 3));
            var Account = J$.X1(81, J$.W(73, 'Account', J$.T(65, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(49, arguments.callee, this, arguments);
                            arguments = J$.N(57, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 49), Account, 3));
            J$.X1(249, J$.M(241, J$.R(89, 'Object', Object, 2), 'defineProperties', 0)(J$.G(105, J$.R(97, 'Account', Account, 1), 'prototype', 0), J$.T(233, {
                deposit: J$.F(145, J$.R(113, 'd', d, 1), 0)(J$.T(137, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(121, arguments.callee, this, arguments);
                                arguments = J$.N(129, 'arguments', arguments, 4);
                            } catch (J$e) {
                                J$.Ex(297, J$e);
                            } finally {
                                if (J$.Fr(305))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 121)),
                withdraw: J$.F(185, J$.R(153, 'd', d, 1), 0)(J$.T(177, function () {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(161, arguments.callee, this, arguments);
                                arguments = J$.N(169, 'arguments', arguments, 4);
                            } catch (J$e) {
                                J$.Ex(313, J$e);
                            } finally {
                                if (J$.Fr(321))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 161)),
                balance: J$.M(225, J$.R(193, 'd', d, 1), 'gs', 0)(J$.T(217, function () {
                    jalangiLabel3:
                        while (true) {
                            try {
                                J$.Fe(201, arguments.callee, this, arguments);
                                arguments = J$.N(209, 'arguments', arguments, 4);
                            } catch (J$e) {
                                J$.Ex(329, J$e);
                            } finally {
                                if (J$.Fr(337))
                                    continue jalangiLabel3;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 201))
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
