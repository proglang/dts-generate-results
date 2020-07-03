J$.iids = {"8":[9,7,9,12],"9":[1,12,1,19],"10":[13,15,13,40],"17":[1,20,1,26],"18":[13,15,13,47],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[4,15,4,28],"57":[4,15,4,28],"65":[4,15,4,28],"73":[5,26,5,36],"81":[5,15,5,38],"89":[5,15,5,38],"97":[5,15,5,38],"105":[6,12,6,16],"113":[6,17,6,24],"121":[6,26,6,33],"129":[6,12,6,34],"137":[6,12,6,34],"145":[6,12,6,34],"153":[8,1,8,5],"161":[9,7,9,12],"169":[10,5,10,12],"177":[10,17,10,29],"185":[10,31,10,36],"193":[10,38,10,48],"201":[10,50,10,56],"209":[10,5,10,57],"211":[10,5,10,16],"217":[10,5,10,58],"225":[11,5,11,12],"233":[11,5,11,12],"241":[13,3,13,10],"249":[13,15,13,31],"257":[13,34,13,40],"265":[13,43,13,47],"273":[13,3,13,48],"275":[13,3,13,14],"281":[13,3,13,49],"289":[8,14,14,2],"297":[8,14,14,2],"305":[8,14,14,2],"313":[8,14,14,2],"321":[8,14,14,2],"329":[8,1,14,3],"331":[8,1,8,13],"337":[8,1,14,4],"345":[1,1,15,1],"353":[1,1,15,1],"361":[1,1,15,1],"369":[1,1,15,1],"377":[1,1,15,1],"385":[9,3,12,4],"393":[8,14,14,2],"401":[8,14,14,2],"409":[1,1,15,1],"417":[1,1,15,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Nssm = require('nssm');\n//var Nssm = require('../');\n\nvar svcName = 'AeLookupSvc';\nvar options = { nssmExe: 'nssm.exe' }; // default\nvar nssm = Nssm(svcName, options);\n\nnssm.restart(function(error, result) {\n  if (error) {\n    console.log('*** error:', error, ' stderr:', result);\n    return;\n  }\n  console.log('*** stdout: \\'' + result + '\\'');\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(345, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(353, 'Nssm', Nssm, 0);
            J$.N(361, 'svcName', svcName, 0);
            J$.N(369, 'options', options, 0);
            J$.N(377, 'nssm', nssm, 0);
            var Nssm = J$.X1(41, J$.W(33, 'Nssm', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'nssm', 21, false)), Nssm, 3));
            var svcName = J$.X1(65, J$.W(57, 'svcName', J$.T(49, 'AeLookupSvc', 21, false), svcName, 3));
            var options = J$.X1(97, J$.W(89, 'options', J$.T(81, {
                nssmExe: J$.T(73, 'nssm.exe', 21, false)
            }, 11, false), options, 3));
            var nssm = J$.X1(145, J$.W(137, 'nssm', J$.F(129, J$.R(105, 'Nssm', Nssm, 1), 0)(J$.R(113, 'svcName', svcName, 1), J$.R(121, 'options', options, 1)), nssm, 3));
            J$.X1(337, J$.M(329, J$.R(153, 'nssm', nssm, 1), 'restart', 0)(J$.T(321, function (error, result) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(289, arguments.callee, this, arguments);
                            arguments = J$.N(297, 'arguments', arguments, 4);
                            error = J$.N(305, 'error', error, 4);
                            result = J$.N(313, 'result', result, 4);
                            if (J$.X1(385, J$.C(8, J$.R(161, 'error', error, 0)))) {
                                J$.X1(217, J$.M(209, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, '*** error:', 21, false), J$.R(185, 'error', error, 0), J$.T(193, ' stderr:', 21, false), J$.R(201, 'result', result, 0)));
                                return J$.X1(233, J$.Rt(225, undefined));
                            }
                            J$.X1(281, J$.M(273, J$.R(241, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(249, '*** stdout: \'', 21, false), J$.R(257, 'result', result, 0), 0), J$.T(265, '\'', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 289)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
