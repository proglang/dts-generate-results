J$.iids = {"9":[1,19,1,26],"10":[4,11,4,27],"17":[1,27,1,42],"25":[1,19,1,43],"33":[1,19,1,43],"41":[1,19,1,43],"49":[4,11,4,15],"57":[4,18,4,27],"65":[4,11,4,27],"73":[4,4,4,28],"81":[3,23,5,2],"89":[3,23,5,2],"97":[3,23,5,2],"105":[3,23,5,2],"113":[3,23,5,2],"121":[3,23,5,2],"129":[3,23,5,2],"137":[8,12,8,26],"145":[8,12,8,26],"153":[8,12,8,26],"161":[8,12,8,26],"169":[8,5,8,27],"177":[7,26,9,2],"185":[7,26,9,2],"193":[7,26,9,2],"201":[7,26,9,4],"209":[7,26,9,4],"217":[7,26,9,4],"225":[11,1,11,12],"233":[11,13,11,28],"241":[11,1,11,29],"249":[11,1,11,29],"257":[12,1,12,12],"265":[12,13,12,30],"273":[12,1,12,31],"281":[12,1,12,31],"289":[1,1,13,1],"297":[1,1,13,1],"305":[1,1,13,1],"313":[1,1,13,1],"321":[3,23,5,2],"329":[3,23,5,2],"337":[8,12,8,26],"345":[8,12,8,26],"353":[7,26,9,2],"361":[7,26,9,2],"369":[1,1,13,1],"377":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var getFuncName = require('get-func-name');\n\nvar unknownFunction = function myCoolFunction(word) {\n   return word + 'is cool'; \n};\n\nvar anonymousFunction = (function () {\n    return function () {};\n}());\n\ngetFuncName(unknownFunction) // 'myCoolFunction'\ngetFuncName(anonymousFunction) // ''\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(289, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(297, 'getFuncName', getFuncName, 0);
            J$.N(305, 'unknownFunction', unknownFunction, 0);
            J$.N(313, 'anonymousFunction', anonymousFunction, 0);
            var getFuncName = J$.X1(41, J$.W(33, 'getFuncName', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'get-func-name', 21, false)), getFuncName, 3));
            var unknownFunction = J$.X1(129, J$.W(121, 'unknownFunction', J$.T(113, function myCoolFunction(word) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(81, arguments.callee, this, arguments);
                            arguments = J$.N(89, 'arguments', arguments, 4);
                            myCoolFunction = J$.N(97, 'myCoolFunction', myCoolFunction, 0);
                            word = J$.N(105, 'word', word, 4);
                            return J$.X1(73, J$.Rt(65, J$.B(10, '+', J$.R(49, 'word', word, 0), J$.T(57, 'is cool', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 81), unknownFunction, 3));
            var anonymousFunction = J$.X1(217, J$.W(209, 'anonymousFunction', J$.F(201, J$.T(193, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            return J$.X1(169, J$.Rt(161, J$.T(153, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(137, arguments.callee, this, arguments);
                                            arguments = J$.N(145, 'arguments', arguments, 4);
                                        } catch (J$e) {
                                            J$.Ex(337, J$e);
                                        } finally {
                                            if (J$.Fr(345))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 137)));
                        } catch (J$e) {
                            J$.Ex(353, J$e);
                        } finally {
                            if (J$.Fr(361))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 177), 0)(), anonymousFunction, 3));
            J$.X1(249, J$.F(241, J$.R(225, 'getFuncName', getFuncName, 1), 0)(J$.R(233, 'unknownFunction', unknownFunction, 1)));
            J$.X1(281, J$.F(273, J$.R(257, 'getFuncName', getFuncName, 1), 0)(J$.R(265, 'anonymousFunction', anonymousFunction, 1)));
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
