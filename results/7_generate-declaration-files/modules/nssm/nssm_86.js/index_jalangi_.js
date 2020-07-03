J$.iids = {"8":[9,7,9,12],"9":[1,12,1,19],"10":[13,15,13,40],"17":[1,20,1,26],"18":[13,15,13,47],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[4,15,4,21],"57":[4,15,4,21],"65":[4,15,4,21],"73":[5,26,5,36],"81":[5,15,5,38],"89":[5,15,5,38],"97":[5,15,5,38],"105":[6,12,6,16],"113":[6,17,6,24],"121":[6,26,6,33],"129":[6,12,6,34],"137":[6,12,6,34],"145":[6,12,6,34],"153":[8,1,8,5],"161":[8,10,8,17],"169":[8,19,8,27],"177":[9,7,9,12],"185":[10,5,10,12],"193":[10,17,10,29],"201":[10,31,10,36],"209":[10,38,10,48],"217":[10,50,10,56],"225":[10,5,10,57],"227":[10,5,10,16],"233":[10,5,10,58],"241":[11,5,11,12],"249":[11,5,11,12],"257":[13,3,13,10],"265":[13,15,13,31],"273":[13,34,13,40],"281":[13,43,13,47],"289":[13,3,13,48],"291":[13,3,13,14],"297":[13,3,13,49],"305":[8,29,14,2],"313":[8,29,14,2],"321":[8,29,14,2],"329":[8,29,14,2],"337":[8,29,14,2],"345":[8,1,14,3],"347":[8,1,8,9],"353":[8,1,14,4],"361":[1,1,15,1],"369":[1,1,15,1],"377":[1,1,15,1],"385":[1,1,15,1],"393":[1,1,15,1],"401":[9,3,12,4],"409":[8,29,14,2],"417":[8,29,14,2],"425":[1,1,15,1],"433":[1,1,15,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Nssm = require('nssm');\n//var Nssm = require('../');\n\nvar svcName = 'test';\nvar options = { nssmExe: 'nssm.exe' }; // default\nvar nssm = Nssm(svcName, options);\n\nnssm.set('Start', 'manual', function(error, result) {\n  if (error) {\n    console.log('*** error:', error, ' stderr:', result);\n    return;\n  }\n  console.log('*** stdout: \\'' + result + '\\'');\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(361, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(369, 'Nssm', Nssm, 0);
            J$.N(377, 'svcName', svcName, 0);
            J$.N(385, 'options', options, 0);
            J$.N(393, 'nssm', nssm, 0);
            var Nssm = J$.X1(41, J$.W(33, 'Nssm', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'nssm', 21, false)), Nssm, 3));
            var svcName = J$.X1(65, J$.W(57, 'svcName', J$.T(49, 'test', 21, false), svcName, 3));
            var options = J$.X1(97, J$.W(89, 'options', J$.T(81, {
                nssmExe: J$.T(73, 'nssm.exe', 21, false)
            }, 11, false), options, 3));
            var nssm = J$.X1(145, J$.W(137, 'nssm', J$.F(129, J$.R(105, 'Nssm', Nssm, 1), 0)(J$.R(113, 'svcName', svcName, 1), J$.R(121, 'options', options, 1)), nssm, 3));
            J$.X1(353, J$.M(345, J$.R(153, 'nssm', nssm, 1), 'set', 0)(J$.T(161, 'Start', 21, false), J$.T(169, 'manual', 21, false), J$.T(337, function (error, result) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            error = J$.N(321, 'error', error, 4);
                            result = J$.N(329, 'result', result, 4);
                            if (J$.X1(401, J$.C(8, J$.R(177, 'error', error, 0)))) {
                                J$.X1(233, J$.M(225, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, '*** error:', 21, false), J$.R(201, 'error', error, 0), J$.T(209, ' stderr:', 21, false), J$.R(217, 'result', result, 0)));
                                return J$.X1(249, J$.Rt(241, undefined));
                            }
                            J$.X1(297, J$.M(289, J$.R(257, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(265, '*** stdout: \'', 21, false), J$.R(273, 'result', result, 0), 0), J$.T(281, '\'', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
