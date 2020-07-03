J$.iids = {"9":[2,11,2,18],"17":[2,19,2,30],"25":[2,11,2,31],"33":[2,32,2,34],"41":[2,11,2,35],"49":[2,11,2,35],"57":[2,11,2,35],"65":[3,14,3,21],"73":[3,22,3,28],"81":[3,14,3,29],"89":[4,2,4,5],"97":[5,3,5,6],"105":[5,11,5,14],"113":[5,3,5,15],"115":[5,3,5,10],"121":[5,3,5,16],"129":[7,3,7,13],"137":[7,14,7,17],"145":[7,14,7,23],"153":[7,25,7,28],"161":[7,3,7,29],"169":[7,3,7,29],"177":[4,11,8,3],"185":[4,11,8,3],"193":[4,11,8,3],"201":[4,2,8,4],"203":[4,2,4,10],"209":[4,2,8,5],"217":[3,43,9,2],"225":[3,43,9,2],"233":[3,43,9,2],"241":[3,43,9,2],"249":[3,43,9,2],"257":[3,14,9,3],"259":[3,14,3,42],"265":[3,14,9,3],"273":[3,14,9,3],"281":[1,1,10,1],"289":[1,1,10,1],"297":[1,1,10,1],"305":[4,11,8,3],"313":[4,11,8,3],"321":[3,43,9,2],"329":[3,43,9,2],"337":[1,1,10,1],"345":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Rate limit\nvar sem = require('semaphore')(10);\nvar server = require('http').createServer(function(req, res) {\n\tsem.take(function() {\n\t\tres.end(\".\");\n\t\t\n\t\tsetTimeout(sem.leave, 500)\n\t});\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'sem', sem, 0);
            J$.N(297, 'server', server, 0);
            var sem = J$.X1(57, J$.W(49, 'sem', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'semaphore', 21, false)), 0)(J$.T(33, 10, 22, false)), sem, 3));
            var server = J$.X1(273, J$.W(265, 'server', J$.M(257, J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, 'http', 21, false)), 'createServer', 0)(J$.T(249, function (req, res) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            req = J$.N(233, 'req', req, 4);
                            res = J$.N(241, 'res', res, 4);
                            J$.X1(209, J$.M(201, J$.R(89, 'sem', sem, 1), 'take', 0)(J$.T(193, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(177, arguments.callee, this, arguments);
                                            arguments = J$.N(185, 'arguments', arguments, 4);
                                            J$.X1(121, J$.M(113, J$.R(97, 'res', res, 0), 'end', 0)(J$.T(105, ".", 21, false)));
                                            J$.X1(169, J$.F(161, J$.R(129, 'setTimeout', setTimeout, 2), 0)(J$.G(145, J$.R(137, 'sem', sem, 1), 'leave', 0), J$.T(153, 500, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(305, J$e);
                                        } finally {
                                            if (J$.Fr(313))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 177)));
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217)), server, 3));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
