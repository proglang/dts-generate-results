J$.iids = {"9":[1,14,1,21],"17":[1,22,1,38],"25":[1,14,1,39],"33":[1,14,1,39],"41":[1,14,1,39],"49":[2,15,2,22],"57":[2,23,2,32],"65":[2,15,2,33],"73":[2,15,2,33],"81":[2,15,2,33],"89":[3,11,3,18],"97":[3,19,3,24],"105":[3,11,3,25],"113":[3,11,3,25],"121":[3,11,3,25],"129":[6,17,6,23],"137":[9,10,9,13],"145":[9,10,9,21],"153":[9,28,9,32],"161":[9,34,9,43],"169":[9,10,9,44],"171":[9,10,9,27],"177":[9,10,9,44],"185":[9,3,9,45],"193":[6,24,10,2],"201":[6,24,10,2],"209":[6,24,10,2],"217":[6,17,10,3],"225":[6,17,10,3],"233":[6,17,10,3],"241":[14,29,14,33],"249":[14,29,14,33],"257":[14,22,14,34],"265":[14,9,14,36],"273":[14,9,14,36],"281":[14,9,14,36],"289":[15,10,15,24],"297":[15,10,15,24],"305":[15,10,15,24],"313":[13,18,16,2],"321":[13,18,16,2],"329":[13,18,16,2],"337":[18,10,18,19],"345":[19,17,19,24],"353":[19,33,19,43],"361":[19,13,19,44],"363":[19,17,19,32],"369":[20,14,20,22],"377":[21,14,21,19],"385":[18,20,22,2],"393":[22,4,24,2],"401":[22,4,24,2],"409":[22,4,24,2],"417":[22,4,24,2],"425":[18,10,24,3],"433":[18,10,24,3],"441":[18,10,24,3],"449":[1,1,25,1],"457":[1,1,25,1],"465":[1,1,25,1],"473":[1,1,25,1],"481":[1,1,25,1],"489":[1,1,25,1],"497":[1,1,25,1],"505":[6,24,10,2],"513":[6,24,10,2],"521":[14,9,14,36],"529":[14,9,14,36],"537":[15,10,15,24],"545":[15,10,15,24],"553":[22,4,24,2],"561":[22,4,24,2],"569":[1,1,25,1],"577":[1,1,25,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var inject = require('reconnect-core');\nvar backoff = require('backoff');\nvar net = require('net');\n\n// build you own reconnect module\nvar reconnect = inject(function () {\n  // arguments are what you passed to .connect\n  // this is the reconnect instance\n  return net.connect.apply(null, arguments);\n});\n\n// Reconnect every 10 seconds\nvar myStrategy = {\n  next: function() { return 10e3; },\n  reset: function() { }\n}\n\nvar re = reconnect({\n  strategy: new backoff.Backoff(myStrategy),\n  failAfter: Infinity,\n  immediate: false\n}, function (stream) {\n  // stream = the stream you should consume\n})\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(449, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(457, 'inject', inject, 0);
            J$.N(465, 'backoff', backoff, 0);
            J$.N(473, 'net', net, 0);
            J$.N(481, 'reconnect', reconnect, 0);
            J$.N(489, 'myStrategy', myStrategy, 0);
            J$.N(497, 're', re, 0);
            var inject = J$.X1(41, J$.W(33, 'inject', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'reconnect-core', 21, false)), inject, 3));
            var backoff = J$.X1(81, J$.W(73, 'backoff', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'backoff', 21, false)), backoff, 3));
            var net = J$.X1(121, J$.W(113, 'net', J$.F(105, J$.R(89, 'require', require, 2), 0)(J$.T(97, 'net', 21, false)), net, 3));
            var reconnect = J$.X1(233, J$.W(225, 'reconnect', J$.F(217, J$.R(129, 'inject', inject, 1), 0)(J$.T(209, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            return J$.X1(185, J$.Rt(177, J$.M(169, J$.G(145, J$.R(137, 'net', net, 1), 'connect', 0), 'apply', 0)(J$.T(153, null, 25, false), J$.R(161, 'arguments', arguments, 2))));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193)), reconnect, 3));
            var myStrategy = J$.X1(329, J$.W(321, 'myStrategy', J$.T(313, {
                next: J$.T(281, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(265, arguments.callee, this, arguments);
                                arguments = J$.N(273, 'arguments', arguments, 4);
                                return J$.X1(257, J$.Rt(249, J$.T(241, 10e3, 22, false)));
                            } catch (J$e) {
                                J$.Ex(521, J$e);
                            } finally {
                                if (J$.Fr(529))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 265),
                reset: J$.T(305, function () {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(289, arguments.callee, this, arguments);
                                arguments = J$.N(297, 'arguments', arguments, 4);
                            } catch (J$e) {
                                J$.Ex(537, J$e);
                            } finally {
                                if (J$.Fr(545))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 289)
            }, 11, false), myStrategy, 3));
            var re = J$.X1(441, J$.W(433, 're', J$.F(425, J$.R(337, 'reconnect', reconnect, 1), 0)(J$.T(385, {
                strategy: J$.M(361, J$.R(345, 'backoff', backoff, 1), 'Backoff', 2)(J$.R(353, 'myStrategy', myStrategy, 1)),
                failAfter: J$.T(369, Infinity, 22, false),
                immediate: J$.T(377, false, 23, false)
            }, 11, false), J$.T(417, function (stream) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(393, arguments.callee, this, arguments);
                            arguments = J$.N(401, 'arguments', arguments, 4);
                            stream = J$.N(409, 'stream', stream, 4);
                        } catch (J$e) {
                            J$.Ex(553, J$e);
                        } finally {
                            if (J$.Fr(561))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 393)), re, 3));
        } catch (J$e) {
            J$.Ex(569, J$e);
        } finally {
            if (J$.Sr(577)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
