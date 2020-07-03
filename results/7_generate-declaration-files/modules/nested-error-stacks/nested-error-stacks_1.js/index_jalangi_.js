J$.iids = {"9":[1,19,1,26],"17":[1,27,1,48],"25":[1,19,1,49],"33":[1,19,1,49],"41":[1,19,1,49],"49":[2,11,2,18],"57":[2,19,2,24],"65":[2,11,2,25],"73":[2,11,2,25],"81":[2,11,2,25],"89":[4,14,4,17],"97":[4,33,4,37],"105":[4,26,4,38],"113":[4,14,4,39],"115":[4,14,4,25],"121":[4,14,4,39],"129":[4,14,4,39],"137":[5,1,5,7],"145":[5,11,5,18],"153":[6,22,6,33],"161":[6,34,6,77],"169":[6,79,6,82],"177":[6,18,6,83],"185":[6,18,6,83],"193":[6,18,6,83],"201":[7,5,7,12],"209":[7,17,7,23],"217":[7,17,7,29],"225":[7,5,7,30],"227":[7,5,7,16],"233":[7,5,7,31],"241":[5,20,8,2],"249":[5,20,8,2],"257":[5,20,8,2],"265":[5,20,8,2],"273":[5,20,8,2],"281":[5,1,8,3],"283":[5,1,5,10],"289":[5,1,8,4],"297":[1,1,9,1],"305":[1,1,9,1],"313":[1,1,9,1],"321":[1,1,9,1],"329":[5,20,8,2],"337":[5,20,8,2],"345":[1,1,9,1],"353":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var NestedError = require('nested-error-stacks');\nvar net = require('net');\n    \nvar client = net.connect({port: 8080});\nclient.on('error', function (err) {\n    var newErr = new NestedError(\"Failed to communicate with localhost:8080\", err);\n    console.log(newErr.stack);\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'NestedError', NestedError, 0);
            J$.N(313, 'net', net, 0);
            J$.N(321, 'client', client, 0);
            var NestedError = J$.X1(41, J$.W(33, 'NestedError', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'nested-error-stacks', 21, false)), NestedError, 3));
            var net = J$.X1(81, J$.W(73, 'net', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'net', 21, false)), net, 3));
            var client = J$.X1(129, J$.W(121, 'client', J$.M(113, J$.R(89, 'net', net, 1), 'connect', 0)(J$.T(105, {
                port: J$.T(97, 8080, 22, false)
            }, 11, false)), client, 3));
            J$.X1(289, J$.M(281, J$.R(137, 'client', client, 1), 'on', 0)(J$.T(145, 'error', 21, false), J$.T(273, function (err) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            err = J$.N(257, 'err', err, 4);
                            J$.N(265, 'newErr', newErr, 0);
                            var newErr = J$.X1(193, J$.W(185, 'newErr', J$.F(177, J$.R(153, 'NestedError', NestedError, 1), 1)(J$.T(161, "Failed to communicate with localhost:8080", 21, false), J$.R(169, 'err', err, 0)), newErr, 1));
                            J$.X1(233, J$.M(225, J$.R(201, 'console', console, 2), 'log', 0)(J$.G(217, J$.R(209, 'newErr', newErr, 0), 'stack', 0)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
