J$.iids = {"9":[2,11,2,18],"17":[2,19,2,30],"25":[2,11,2,31],"33":[2,32,2,33],"41":[2,11,2,34],"49":[2,11,2,34],"57":[2,11,2,34],"65":[3,14,3,21],"73":[3,22,3,28],"81":[3,14,3,29],"89":[4,2,4,5],"97":[4,12,4,35],"105":[4,2,4,36],"107":[4,2,4,11],"113":[4,2,4,37],"121":[6,2,6,5],"129":[7,3,7,6],"137":[7,11,7,45],"145":[7,3,7,46],"147":[7,3,7,10],"153":[7,3,7,47],"161":[8,3,8,6],"169":[8,3,8,14],"171":[8,3,8,12],"177":[8,3,8,15],"185":[6,11,9,3],"193":[6,11,9,3],"201":[6,11,9,3],"209":[6,2,9,4],"211":[6,2,6,10],"217":[6,2,9,5],"225":[3,43,10,2],"233":[3,43,10,2],"241":[3,43,10,2],"249":[3,43,10,2],"257":[3,43,10,2],"265":[3,14,10,3],"267":[3,14,3,42],"273":[3,14,10,3],"281":[3,14,10,3],"289":[1,1,11,1],"297":[1,1,11,1],"305":[1,1,11,1],"313":[6,11,9,3],"321":[6,11,9,3],"329":[3,43,10,2],"337":[3,43,10,2],"345":[1,1,11,1],"353":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// 2 clients at a time\nvar sem = require('semaphore')(2);\nvar server = require('http').createServer(function(req, res) {\n\tres.write(\"Then good day, madam!\");\n\n\tsem.take(function() {\n\t\tres.end(\"We hope to see you soon for tea.\");\n\t\tsem.leave();\n\t});\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(289, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(297, 'sem', sem, 0);
            J$.N(305, 'server', server, 0);
            var sem = J$.X1(57, J$.W(49, 'sem', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'semaphore', 21, false)), 0)(J$.T(33, 2, 22, false)), sem, 3));
            var server = J$.X1(281, J$.W(273, 'server', J$.M(265, J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, 'http', 21, false)), 'createServer', 0)(J$.T(257, function (req, res) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            req = J$.N(241, 'req', req, 4);
                            res = J$.N(249, 'res', res, 4);
                            J$.X1(113, J$.M(105, J$.R(89, 'res', res, 0), 'write', 0)(J$.T(97, "Then good day, madam!", 21, false)));
                            J$.X1(217, J$.M(209, J$.R(121, 'sem', sem, 1), 'take', 0)(J$.T(201, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(185, arguments.callee, this, arguments);
                                            arguments = J$.N(193, 'arguments', arguments, 4);
                                            J$.X1(153, J$.M(145, J$.R(129, 'res', res, 0), 'end', 0)(J$.T(137, "We hope to see you soon for tea.", 21, false)));
                                            J$.X1(177, J$.M(169, J$.R(161, 'sem', sem, 1), 'leave', 0)());
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 185)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 225)), server, 3));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
