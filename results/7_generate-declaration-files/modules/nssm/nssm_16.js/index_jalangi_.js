J$.iids = {"9":[1,12,1,19],"10":[12,17,12,46],"17":[1,20,1,26],"18":[12,17,12,53],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[4,15,4,28],"57":[4,15,4,28],"65":[4,15,4,28],"73":[5,26,5,36],"81":[5,15,5,38],"89":[5,15,5,38],"97":[5,15,5,38],"105":[6,12,6,16],"113":[6,17,6,24],"121":[6,26,6,33],"129":[6,12,6,34],"137":[6,12,6,34],"145":[6,12,6,34],"153":[8,20,8,27],"161":[8,20,8,27],"169":[8,20,8,27],"177":[10,1,10,5],"185":[10,10,10,22],"193":[10,1,10,23],"195":[10,1,10,9],"201":[12,5,12,12],"209":[12,17,12,37],"217":[12,40,12,46],"225":[12,49,12,53],"233":[12,5,12,54],"235":[12,5,12,16],"241":[12,5,12,55],"249":[11,9,13,4],"257":[11,9,13,4],"265":[11,9,13,4],"273":[11,9,13,4],"281":[10,1,13,5],"283":[10,1,11,8],"289":[15,5,15,12],"297":[15,17,15,34],"305":[15,36,15,41],"313":[15,5,15,42],"315":[15,5,15,16],"321":[15,5,15,43],"329":[14,10,16,4],"337":[14,10,16,4],"345":[14,10,16,4],"353":[14,10,16,4],"361":[10,1,16,5],"363":[10,1,14,9],"369":[10,1,17,4],"377":[1,1,18,1],"385":[1,1,18,1],"393":[1,1,18,1],"401":[1,1,18,1],"409":[1,1,18,1],"417":[1,1,18,1],"425":[11,9,13,4],"433":[11,9,13,4],"441":[14,10,16,4],"449":[14,10,16,4],"457":[1,1,18,1],"465":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Nssm = require('nssm');\n//var Nssm = require('../');\n\nvar svcName = 'AeLookupSvc';\nvar options = { nssmExe: 'nssm.exe' }; // default\nvar nssm = Nssm(svcName, options);\n\nvar propertyName = 'Start';\n\nnssm.get(propertyName)\n  .then(function(stdout) {\n    console.log('then(): stdout: \\'' + stdout + '\\'');\n  })\n  .catch(function(error) {\n    console.log('catch(): error:', error);\n  })\n  ;\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'Nssm', Nssm, 0);
            J$.N(393, 'svcName', svcName, 0);
            J$.N(401, 'options', options, 0);
            J$.N(409, 'nssm', nssm, 0);
            J$.N(417, 'propertyName', propertyName, 0);
            var Nssm = J$.X1(41, J$.W(33, 'Nssm', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'nssm', 21, false)), Nssm, 3));
            var svcName = J$.X1(65, J$.W(57, 'svcName', J$.T(49, 'AeLookupSvc', 21, false), svcName, 3));
            var options = J$.X1(97, J$.W(89, 'options', J$.T(81, {
                nssmExe: J$.T(73, 'nssm.exe', 21, false)
            }, 11, false), options, 3));
            var nssm = J$.X1(145, J$.W(137, 'nssm', J$.F(129, J$.R(105, 'Nssm', Nssm, 1), 0)(J$.R(113, 'svcName', svcName, 1), J$.R(121, 'options', options, 1)), nssm, 3));
            var propertyName = J$.X1(169, J$.W(161, 'propertyName', J$.T(153, 'Start', 21, false), propertyName, 3));
            J$.X1(369, J$.M(361, J$.M(281, J$.M(193, J$.R(177, 'nssm', nssm, 1), 'get', 0)(J$.R(185, 'propertyName', propertyName, 1)), 'then', 0)(J$.T(273, function (stdout) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            stdout = J$.N(265, 'stdout', stdout, 4);
                            J$.X1(241, J$.M(233, J$.R(201, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(209, 'then(): stdout: \'', 21, false), J$.R(217, 'stdout', stdout, 0), 0), J$.T(225, '\'', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249)), 'catch', 0)(J$.T(353, function (error) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(329, arguments.callee, this, arguments);
                            arguments = J$.N(337, 'arguments', arguments, 4);
                            error = J$.N(345, 'error', error, 4);
                            J$.X1(321, J$.M(313, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, 'catch(): error:', 21, false), J$.R(305, 'error', error, 0)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 329)));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
