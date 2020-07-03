J$.iids = {"8":[22,13,22,37],"9":[1,20,1,27],"10":[22,13,22,37],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[4,1,4,13],"57":[5,5,5,12],"65":[5,17,5,33],"73":[5,35,5,41],"81":[5,5,5,42],"83":[5,5,5,16],"89":[5,5,5,43],"97":[7,12,7,23],"105":[7,12,7,25],"113":[8,12,8,17],"121":[7,12,8,18],"123":[7,12,8,11],"129":[7,12,8,18],"137":[7,5,8,19],"145":[4,14,9,2],"153":[4,14,9,2],"161":[4,14,9,2],"169":[4,14,9,2],"177":[4,14,9,2],"185":[4,1,9,3],"193":[10,7,12,2],"201":[10,7,12,2],"209":[10,7,12,2],"217":[10,7,12,2],"225":[12,4,14,2],"233":[12,4,14,2],"241":[12,4,14,2],"249":[12,4,14,2],"257":[4,1,14,3],"259":[4,1,10,6],"265":[4,1,14,4],"273":[17,1,17,13],"281":[18,5,18,12],"289":[18,17,18,33],"297":[18,35,18,41],"305":[18,5,18,42],"307":[18,5,18,16],"313":[18,5,18,43],"321":[20,12,20,23],"329":[20,12,20,25],"337":[22,13,22,16],"345":[22,13,22,21],"353":[22,26,22,37],"361":[23,13,23,18],"369":[23,19,23,22],"377":[23,13,23,23],"385":[23,13,23,24],"393":[26,15,26,18],"401":[26,15,26,18],"409":[26,9,26,19],"417":[21,12,27,6],"425":[21,12,27,6],"433":[21,12,27,6],"441":[21,12,27,6],"449":[20,12,27,7],"451":[20,12,21,11],"457":[20,12,27,7],"465":[20,5,27,8],"473":[17,14,28,2],"481":[17,14,28,2],"489":[17,14,28,2],"497":[17,14,28,2],"505":[17,14,28,2],"513":[17,1,28,3],"521":[29,7,31,2],"529":[29,7,31,2],"537":[29,7,31,2],"545":[29,7,31,2],"553":[31,4,33,2],"561":[31,4,33,2],"569":[31,4,33,2],"577":[31,4,33,2],"585":[17,1,33,3],"587":[17,1,29,6],"593":[17,1,33,4],"601":[1,1,34,1],"609":[1,1,34,1],"617":[4,14,9,2],"625":[4,14,9,2],"633":[10,7,12,2],"641":[10,7,12,2],"649":[12,4,14,2],"657":[12,4,14,2],"665":[22,9,24,10],"673":[21,12,27,6],"681":[21,12,27,6],"689":[17,14,28,2],"697":[17,14,28,2],"705":[29,7,31,2],"713":[29,7,31,2],"721":[31,4,33,2],"729":[31,4,33,2],"737":[1,1,34,1],"745":[1,1,34,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var promiseRetry = require('promise-retry');\n\n// Simple example\npromiseRetry(function (retry, number) {\n    console.log('attempt number', number);\n\n    return doSomething()\n    .catch(retry);\n})\n.then(function (value) {\n    // ..\n}, function (err) {\n    // ..\n});\n\n// Conditional example\npromiseRetry(function (retry, number) {\n    console.log('attempt number', number);\n\n    return doSomething()\n    .catch(function (err) {\n        if (err.code === 'ETIMEDOUT') {\n            retry(err);\n        }\n\n        throw err;\n    });\n})\n.then(function (value) {\n    // ..\n}, function (err) {\n    // ..\n});\n"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(601, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(609, 'promiseRetry', promiseRetry, 0);
            var promiseRetry = J$.X1(41, J$.W(33, 'promiseRetry', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'promise-retry', 21, false)), promiseRetry, 3));
            J$.X1(265, J$.M(257, J$.F(185, J$.R(49, 'promiseRetry', promiseRetry, 1), 0)(J$.T(177, function (retry, number) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            retry = J$.N(161, 'retry', retry, 4);
                            number = J$.N(169, 'number', number, 4);
                            J$.X1(89, J$.M(81, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 'attempt number', 21, false), J$.R(73, 'number', number, 0)));
                            return J$.X1(137, J$.Rt(129, J$.M(121, J$.F(105, J$.R(97, 'doSomething', doSomething, 2), 0)(), 'catch', 0)(J$.R(113, 'retry', retry, 0))));
                        } catch (J$e) {
                            J$.Ex(617, J$e);
                        } finally {
                            if (J$.Fr(625))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145)), 'then', 0)(J$.T(217, function (value) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            value = J$.N(209, 'value', value, 4);
                        } catch (J$e) {
                            J$.Ex(633, J$e);
                        } finally {
                            if (J$.Fr(641))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193), J$.T(249, function (err) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            err = J$.N(241, 'err', err, 4);
                        } catch (J$e) {
                            J$.Ex(649, J$e);
                        } finally {
                            if (J$.Fr(657))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 225)));
            J$.X1(593, J$.M(585, J$.F(513, J$.R(273, 'promiseRetry', promiseRetry, 1), 0)(J$.T(505, function (retry, number) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(473, arguments.callee, this, arguments);
                            arguments = J$.N(481, 'arguments', arguments, 4);
                            retry = J$.N(489, 'retry', retry, 4);
                            number = J$.N(497, 'number', number, 4);
                            J$.X1(313, J$.M(305, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 'attempt number', 21, false), J$.R(297, 'number', number, 0)));
                            return J$.X1(465, J$.Rt(457, J$.M(449, J$.F(329, J$.R(321, 'doSomething', doSomething, 2), 0)(), 'catch', 0)(J$.T(441, function (err) {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(417, arguments.callee, this, arguments);
                                            arguments = J$.N(425, 'arguments', arguments, 4);
                                            err = J$.N(433, 'err', err, 4);
                                            if (J$.X1(665, J$.C(8, J$.B(10, '===', J$.G(345, J$.R(337, 'err', err, 0), 'code', 0), J$.T(353, 'ETIMEDOUT', 21, false), 0)))) {
                                                J$.X1(385, J$.F(377, J$.R(361, 'retry', retry, 0), 0)(J$.R(369, 'err', err, 0)));
                                            }
                                            throw J$.X1(409, J$.Th(401, J$.R(393, 'err', err, 0)));
                                        } catch (J$e) {
                                            J$.Ex(673, J$e);
                                        } finally {
                                            if (J$.Fr(681))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 417))));
                        } catch (J$e) {
                            J$.Ex(689, J$e);
                        } finally {
                            if (J$.Fr(697))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 473)), 'then', 0)(J$.T(545, function (value) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(521, arguments.callee, this, arguments);
                            arguments = J$.N(529, 'arguments', arguments, 4);
                            value = J$.N(537, 'value', value, 4);
                        } catch (J$e) {
                            J$.Ex(705, J$e);
                        } finally {
                            if (J$.Fr(713))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 521), J$.T(577, function (err) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(553, arguments.callee, this, arguments);
                            arguments = J$.N(561, 'arguments', arguments, 4);
                            err = J$.N(569, 'err', err, 4);
                        } catch (J$e) {
                            J$.Ex(721, J$e);
                        } finally {
                            if (J$.Fr(729))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 553)));
        } catch (J$e) {
            J$.Ex(737, J$e);
        } finally {
            if (J$.Sr(745)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
