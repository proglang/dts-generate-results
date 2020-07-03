J$.iids = {"9":[1,12,1,19],"17":[1,20,1,26],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[2,15,2,22],"57":[2,23,2,32],"65":[2,15,2,33],"73":[2,15,2,33],"81":[2,15,2,33],"89":[4,1,4,8],"97":[4,14,4,18],"105":[4,20,4,29],"113":[6,5,6,12],"121":[6,17,6,36],"129":[6,5,6,37],"131":[6,5,6,16],"137":[6,5,6,38],"145":[7,20,7,28],"153":[7,35,7,39],"161":[7,41,7,50],"169":[7,20,7,51],"171":[7,20,7,34],"177":[7,20,7,51],"185":[7,20,7,51],"193":[8,5,8,12],"201":[8,17,8,54],"209":[8,5,8,55],"211":[8,5,8,16],"217":[8,5,8,56],"225":[9,12,9,20],"233":[9,12,9,20],"241":[9,5,9,21],"249":[5,10,10,4],"257":[5,10,10,4],"265":[5,10,10,4],"273":[5,10,10,4],"281":[5,10,10,4],"289":[5,3,10,5],"297":[4,31,11,2],"305":[4,31,11,2],"313":[4,31,11,2],"321":[4,31,11,2],"329":[4,1,11,3],"331":[4,1,4,13],"337":[4,1,11,4],"345":[1,1,12,1],"353":[1,1,12,1],"361":[1,1,12,1],"369":[5,10,10,4],"377":[5,10,10,4],"385":[4,31,11,2],"393":[4,31,11,2],"401":[1,1,12,1],"409":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var http = require('http');\nvar shimmer = require('shimmer');\n\nshimmer.wrap(http, 'request', function (original) {\n  return function () {\n    console.log(\"Starting request!\");\n    var returned = original.apply(this, arguments)\n    console.log(\"Done setting up request -- OH YEAH!\");\n    return returned;\n  };\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(345, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(353, 'http', http, 0);
            J$.N(361, 'shimmer', shimmer, 0);
            var http = J$.X1(41, J$.W(33, 'http', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'http', 21, false)), http, 3));
            var shimmer = J$.X1(81, J$.W(73, 'shimmer', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'shimmer', 21, false)), shimmer, 3));
            J$.X1(337, J$.M(329, J$.R(89, 'shimmer', shimmer, 1), 'wrap', 0)(J$.R(97, 'http', http, 1), J$.T(105, 'request', 21, false), J$.T(321, function (original) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(297, arguments.callee, this, arguments);
                            arguments = J$.N(305, 'arguments', arguments, 4);
                            original = J$.N(313, 'original', original, 4);
                            return J$.X1(289, J$.Rt(281, J$.T(273, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(249, arguments.callee, this, arguments);
                                            arguments = J$.N(257, 'arguments', arguments, 4);
                                            J$.N(265, 'returned', returned, 0);
                                            J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, "Starting request!", 21, false)));
                                            var returned = J$.X1(185, J$.W(177, 'returned', J$.M(169, J$.R(145, 'original', original, 0), 'apply', 0)(J$.R(153, 'this', this, 0), J$.R(161, 'arguments', arguments, 2)), returned, 1));
                                            J$.X1(217, J$.M(209, J$.R(193, 'console', console, 2), 'log', 0)(J$.T(201, "Done setting up request -- OH YEAH!", 21, false)));
                                            return J$.X1(241, J$.Rt(233, J$.R(225, 'returned', returned, 0)));
                                        } catch (J$e) {
                                            J$.Ex(369, J$e);
                                        } finally {
                                            if (J$.Fr(377))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 249)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 297)));
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
