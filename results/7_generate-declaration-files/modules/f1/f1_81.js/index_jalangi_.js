J$.iids = {"9":[1,10,1,17],"17":[1,18,1,22],"25":[1,10,1,23],"33":[1,10,1,25],"41":[1,10,1,25],"49":[1,10,1,25],"57":[3,1,3,3],"65":[5,5,5,12],"73":[5,17,5,26],"81":[5,5,5,27],"83":[5,5,5,16],"89":[5,5,5,28],"97":[9,28,9,29],"105":[8,23,10,8],"113":[13,28,13,29],"121":[12,23,14,8],"129":[7,12,15,6],"137":[7,12,15,6],"145":[7,5,15,7],"153":[4,8,16,4],"161":[4,8,16,4],"169":[4,8,16,4],"177":[4,8,16,4],"185":[19,5,19,12],"193":[19,17,19,26],"201":[19,5,19,27],"203":[19,5,19,16],"209":[19,5,19,28],"217":[23,28,23,29],"225":[22,23,24,8],"233":[27,28,27,29],"241":[26,23,28,8],"249":[21,12,29,6],"257":[21,12,29,6],"265":[21,5,29,7],"273":[18,9,30,4],"281":[18,9,30,4],"289":[18,9,30,4],"297":[18,9,30,4],"305":[3,12,31,2],"313":[3,1,31,3],"315":[3,1,3,10],"321":[3,1,31,4],"329":[1,1,32,1],"337":[1,1,32,1],"345":[4,8,16,4],"353":[4,8,16,4],"361":[18,9,30,4],"369":[18,9,30,4],"377":[1,1,32,1],"385":[1,1,32,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ui = require('f1')();\n\nui.states( {\n  out: function(stateName) {\n    console.log(stateName); // \"out\"\n\n    return {\n      itemToAnimate1: {\n        variableToAnimate: 0\n      },\n\n      itemToAnimate2: {\n        variableToAnimate: 0\n      }\n    };\n  },\n\n  idle: function(stateName) {\n    console.log(stateName); // \"idle\"\n\n    return {\n      itemToAnimate1: {\n        variableToAnimate: 1\n      },\n\n      itemToAnimate2: {\n        variableToAnimate: 2\n      }\n    };\n  }\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(329, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(337, 'ui', ui, 0);
            var ui = J$.X1(49, J$.W(41, 'ui', J$.F(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'f1', 21, false)), 0)(), ui, 3));
            J$.X1(321, J$.M(313, J$.R(57, 'ui', ui, 1), 'states', 0)(J$.T(305, {
                out: J$.T(177, function (stateName) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(153, arguments.callee, this, arguments);
                                arguments = J$.N(161, 'arguments', arguments, 4);
                                stateName = J$.N(169, 'stateName', stateName, 4);
                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.R(73, 'stateName', stateName, 0)));
                                return J$.X1(145, J$.Rt(137, J$.T(129, {
                                    itemToAnimate1: J$.T(105, {
                                        variableToAnimate: J$.T(97, 0, 22, false)
                                    }, 11, false),
                                    itemToAnimate2: J$.T(121, {
                                        variableToAnimate: J$.T(113, 0, 22, false)
                                    }, 11, false)
                                }, 11, false)));
                            } catch (J$e) {
                                J$.Ex(345, J$e);
                            } finally {
                                if (J$.Fr(353))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 153),
                idle: J$.T(297, function (stateName) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(273, arguments.callee, this, arguments);
                                arguments = J$.N(281, 'arguments', arguments, 4);
                                stateName = J$.N(289, 'stateName', stateName, 4);
                                J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.R(193, 'stateName', stateName, 0)));
                                return J$.X1(265, J$.Rt(257, J$.T(249, {
                                    itemToAnimate1: J$.T(225, {
                                        variableToAnimate: J$.T(217, 1, 22, false)
                                    }, 11, false),
                                    itemToAnimate2: J$.T(241, {
                                        variableToAnimate: J$.T(233, 2, 22, false)
                                    }, 11, false)
                                }, 11, false)));
                            } catch (J$e) {
                                J$.Ex(361, J$e);
                            } finally {
                                if (J$.Fr(369))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 273)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
