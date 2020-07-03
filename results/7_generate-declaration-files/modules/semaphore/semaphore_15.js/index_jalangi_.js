J$.iids = {"8":[8,8,8,11],"9":[2,11,2,18],"17":[2,19,2,30],"25":[2,11,2,31],"33":[2,32,2,33],"41":[2,11,2,34],"49":[2,11,2,34],"57":[2,11,2,34],"65":[3,14,3,21],"73":[3,22,3,28],"81":[3,14,3,29],"89":[4,2,4,5],"97":[5,3,5,31],"105":[6,4,6,7],"113":[6,4,6,15],"115":[6,4,6,13],"121":[6,4,6,16],"129":[8,8,8,11],"137":[8,20,8,23],"145":[8,28,8,35],"153":[8,20,8,36],"155":[8,20,8,27],"161":[8,20,8,36],"169":[8,13,8,37],"177":[10,11,10,14],"185":[10,19,10,22],"193":[10,11,10,23],"195":[10,11,10,18],"201":[10,11,10,23],"209":[10,4,10,24],"217":[5,32,11,4],"225":[5,32,11,4],"233":[5,32,11,4],"241":[5,32,11,4],"249":[5,32,11,4],"257":[5,3,11,5],"265":[5,3,11,6],"273":[4,11,12,3],"281":[4,11,12,3],"289":[4,11,12,3],"297":[4,2,12,4],"299":[4,2,4,10],"305":[4,2,12,5],"313":[3,43,13,2],"321":[3,43,13,2],"329":[3,43,13,2],"337":[3,43,13,2],"345":[3,43,13,2],"353":[3,14,13,3],"355":[3,14,3,42],"361":[3,14,13,3],"369":[3,14,13,3],"377":[1,1,14,1],"385":[1,1,14,1],"393":[1,1,14,1],"401":[8,4,8,37],"409":[5,32,11,4],"417":[5,32,11,4],"425":[4,11,12,3],"433":[4,11,12,3],"441":[3,43,13,2],"449":[3,43,13,2],"457":[1,1,14,1],"465":[1,1,14,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Limit concurrent db access\nvar sem = require('semaphore')(1);\nvar server = require('http').createServer(function(req, res) {\n\tsem.take(function() {\n\t\texpensive_database_operation(function(err, res) {\n\t\t\tsem.leave();\n\n\t\t\tif (err) return res.end(\"Error\");\n\n\t\t\treturn res.end(res);\n\t\t});\n\t});\n});\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'sem', sem, 0);
            J$.N(393, 'server', server, 0);
            var sem = J$.X1(57, J$.W(49, 'sem', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'semaphore', 21, false)), 0)(J$.T(33, 1, 22, false)), sem, 3));
            var server = J$.X1(369, J$.W(361, 'server', J$.M(353, J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, 'http', 21, false)), 'createServer', 0)(J$.T(345, function (req, res) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            req = J$.N(329, 'req', req, 4);
                            res = J$.N(337, 'res', res, 4);
                            J$.X1(305, J$.M(297, J$.R(89, 'sem', sem, 1), 'take', 0)(J$.T(289, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(273, arguments.callee, this, arguments);
                                            arguments = J$.N(281, 'arguments', arguments, 4);
                                            J$.X1(265, J$.F(257, J$.R(97, 'expensive_database_operation', expensive_database_operation, 2), 0)(J$.T(249, function (err, res) {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(217, arguments.callee, this, arguments);
                                                            arguments = J$.N(225, 'arguments', arguments, 4);
                                                            err = J$.N(233, 'err', err, 4);
                                                            res = J$.N(241, 'res', res, 4);
                                                            J$.X1(121, J$.M(113, J$.R(105, 'sem', sem, 1), 'leave', 0)());
                                                            if (J$.X1(401, J$.C(8, J$.R(129, 'err', err, 0))))
                                                                return J$.X1(169, J$.Rt(161, J$.M(153, J$.R(137, 'res', res, 0), 'end', 0)(J$.T(145, "Error", 21, false))));
                                                            return J$.X1(209, J$.Rt(201, J$.M(193, J$.R(177, 'res', res, 0), 'end', 0)(J$.R(185, 'res', res, 0))));
                                                        } catch (J$e) {
                                                            J$.Ex(409, J$e);
                                                        } finally {
                                                            if (J$.Fr(417))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 217)));
                                        } catch (J$e) {
                                            J$.Ex(425, J$e);
                                        } finally {
                                            if (J$.Fr(433))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 273)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 313)), server, 3));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
