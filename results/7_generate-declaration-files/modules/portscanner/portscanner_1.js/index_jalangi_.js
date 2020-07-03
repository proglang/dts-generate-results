J$.iids = {"9":[1,19,1,26],"10":[12,15,12,43],"17":[1,27,1,40],"18":[18,15,18,40],"25":[1,19,1,41],"26":[23,15,23,40],"33":[1,19,1,41],"34":[28,15,28,40],"41":[1,19,1,41],"42":[33,15,33,40],"49":[4,1,4,12],"57":[4,29,4,33],"65":[4,35,4,46],"73":[6,3,6,10],"81":[6,15,6,21],"89":[6,3,6,22],"91":[6,3,6,14],"97":[6,3,6,22],"105":[4,48,7,2],"113":[4,48,7,2],"121":[4,48,7,2],"129":[4,48,7,2],"137":[4,48,7,2],"145":[4,1,7,3],"147":[4,1,4,28],"153":[4,1,7,3],"161":[11,1,11,12],"169":[11,31,11,35],"177":[11,37,11,41],"185":[11,43,11,54],"193":[12,3,12,10],"201":[12,15,12,36],"209":[12,39,12,43],"217":[12,3,12,44],"219":[12,3,12,14],"225":[12,3,12,44],"233":[11,56,13,2],"241":[11,56,13,2],"249":[11,56,13,2],"257":[11,56,13,2],"265":[11,56,13,2],"273":[11,1,13,3],"275":[11,1,11,30],"281":[11,1,13,3],"289":[17,1,17,12],"297":[17,28,17,32],"305":[17,34,17,38],"313":[17,40,17,51],"321":[18,3,18,10],"329":[18,15,18,33],"337":[18,36,18,40],"345":[18,3,18,41],"347":[18,3,18,14],"353":[18,3,18,41],"361":[17,53,19,2],"369":[17,53,19,2],"377":[17,53,19,2],"385":[17,53,19,2],"393":[17,53,19,2],"401":[17,1,19,3],"403":[17,1,17,27],"409":[17,1,19,3],"417":[22,1,22,12],"425":[22,29,22,33],"433":[22,35,22,39],"441":[22,41,22,45],"449":[22,28,22,46],"457":[22,48,22,59],"465":[23,3,23,10],"473":[23,15,23,33],"481":[23,36,23,40],"489":[23,3,23,41],"491":[23,3,23,14],"497":[23,3,23,41],"505":[22,61,24,2],"513":[22,61,24,2],"521":[22,61,24,2],"529":[22,61,24,2],"537":[22,61,24,2],"545":[22,1,24,3],"547":[22,1,22,27],"553":[22,1,24,3],"561":[27,1,27,12],"569":[27,31,27,35],"577":[27,37,27,41],"585":[28,3,28,10],"593":[28,15,28,33],"601":[28,36,28,40],"609":[28,3,28,41],"611":[28,3,28,14],"617":[28,3,28,41],"625":[27,43,29,2],"633":[27,43,29,2],"641":[27,43,29,2],"649":[27,43,29,2],"657":[27,43,29,2],"665":[27,1,29,3],"667":[27,1,27,30],"673":[27,1,29,3],"681":[32,1,32,12],"689":[32,31,32,35],"697":[32,37,32,41],"705":[32,1,32,42],"707":[32,1,32,30],"713":[33,3,33,10],"721":[33,15,33,33],"729":[33,36,33,40],"737":[33,3,33,41],"739":[33,3,33,14],"745":[33,3,33,41],"753":[32,48,34,2],"761":[32,48,34,2],"769":[32,48,34,2],"777":[32,48,34,2],"785":[32,1,34,3],"787":[32,1,32,47],"793":[32,1,34,3],"801":[1,1,35,1],"809":[1,1,35,1],"817":[4,48,7,2],"825":[4,48,7,2],"833":[11,56,13,2],"841":[11,56,13,2],"849":[17,53,19,2],"857":[17,53,19,2],"865":[22,61,24,2],"873":[22,61,24,2],"881":[27,43,29,2],"889":[27,43,29,2],"897":[32,48,34,2],"905":[32,48,34,2],"913":[1,1,35,1],"921":[1,1,35,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var portscanner = require('portscanner')\n\n// Checks the status of a single port\nportscanner.checkPortStatus(3000, '127.0.0.1', function(error, status) {\n  // Status is 'open' if currently in use or 'closed' if available\n  console.log(status)\n})\n\n// Find the first available port. Asynchronously checks, so first port\n// determined as available is returned.\nportscanner.findAPortNotInUse(3000, 3010, '127.0.0.1', function(error, port) {\n  console.log('AVAILABLE PORT AT: ' + port)\n})\n\n// Find the first port in use or blocked. Asynchronously checks, so first port\n// to respond is returned.\nportscanner.findAPortInUse(3000, 3010, '127.0.0.1', function(error, port) {\n  console.log('PORT IN USE AT: ' + port)\n})\n\n// You can also pass array of ports to check\nportscanner.findAPortInUse([3000, 3005, 3006], '127.0.0.1', function(error, port) {\n  console.log('PORT IN USE AT: ' + port)\n})\n\n// And skip host param. Default is '127.0.0.1'\nportscanner.findAPortNotInUse(3000, 4000, function(error, port) {\n  console.log('PORT IN USE AT: ' + port)\n})\n\n// And use promises\nportscanner.findAPortNotInUse(3000, 4000).then(function(port) {\n  console.log('PORT IN USE AT: ' + port)\n})\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(801, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(809, 'portscanner', portscanner, 0);
            var portscanner = J$.X1(41, J$.W(33, 'portscanner', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'portscanner', 21, false)), portscanner, 3));
            J$.X1(153, J$.M(145, J$.R(49, 'portscanner', portscanner, 1), 'checkPortStatus', 0)(J$.T(57, 3000, 22, false), J$.T(65, '127.0.0.1', 21, false), J$.T(137, function (error, status) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            error = J$.N(121, 'error', error, 4);
                            status = J$.N(129, 'status', status, 4);
                            J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.R(81, 'status', status, 0)));
                        } catch (J$e) {
                            J$.Ex(817, J$e);
                        } finally {
                            if (J$.Fr(825))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105)));
            J$.X1(281, J$.M(273, J$.R(161, 'portscanner', portscanner, 1), 'findAPortNotInUse', 0)(J$.T(169, 3000, 22, false), J$.T(177, 3010, 22, false), J$.T(185, '127.0.0.1', 21, false), J$.T(265, function (error, port) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            error = J$.N(249, 'error', error, 4);
                            port = J$.N(257, 'port', port, 4);
                            J$.X1(225, J$.M(217, J$.R(193, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(201, 'AVAILABLE PORT AT: ', 21, false), J$.R(209, 'port', port, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(833, J$e);
                        } finally {
                            if (J$.Fr(841))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233)));
            J$.X1(409, J$.M(401, J$.R(289, 'portscanner', portscanner, 1), 'findAPortInUse', 0)(J$.T(297, 3000, 22, false), J$.T(305, 3010, 22, false), J$.T(313, '127.0.0.1', 21, false), J$.T(393, function (error, port) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(361, arguments.callee, this, arguments);
                            arguments = J$.N(369, 'arguments', arguments, 4);
                            error = J$.N(377, 'error', error, 4);
                            port = J$.N(385, 'port', port, 4);
                            J$.X1(353, J$.M(345, J$.R(321, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.T(329, 'PORT IN USE AT: ', 21, false), J$.R(337, 'port', port, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(849, J$e);
                        } finally {
                            if (J$.Fr(857))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 361)));
            J$.X1(553, J$.M(545, J$.R(417, 'portscanner', portscanner, 1), 'findAPortInUse', 0)(J$.T(449, [
                J$.T(425, 3000, 22, false),
                J$.T(433, 3005, 22, false),
                J$.T(441, 3006, 22, false)
            ], 10, false), J$.T(457, '127.0.0.1', 21, false), J$.T(537, function (error, port) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(505, arguments.callee, this, arguments);
                            arguments = J$.N(513, 'arguments', arguments, 4);
                            error = J$.N(521, 'error', error, 4);
                            port = J$.N(529, 'port', port, 4);
                            J$.X1(497, J$.M(489, J$.R(465, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.T(473, 'PORT IN USE AT: ', 21, false), J$.R(481, 'port', port, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(865, J$e);
                        } finally {
                            if (J$.Fr(873))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 505)));
            J$.X1(673, J$.M(665, J$.R(561, 'portscanner', portscanner, 1), 'findAPortNotInUse', 0)(J$.T(569, 3000, 22, false), J$.T(577, 4000, 22, false), J$.T(657, function (error, port) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(625, arguments.callee, this, arguments);
                            arguments = J$.N(633, 'arguments', arguments, 4);
                            error = J$.N(641, 'error', error, 4);
                            port = J$.N(649, 'port', port, 4);
                            J$.X1(617, J$.M(609, J$.R(585, 'console', console, 2), 'log', 0)(J$.B(34, '+', J$.T(593, 'PORT IN USE AT: ', 21, false), J$.R(601, 'port', port, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(881, J$e);
                        } finally {
                            if (J$.Fr(889))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 625)));
            J$.X1(793, J$.M(785, J$.M(705, J$.R(681, 'portscanner', portscanner, 1), 'findAPortNotInUse', 0)(J$.T(689, 3000, 22, false), J$.T(697, 4000, 22, false)), 'then', 0)(J$.T(777, function (port) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(753, arguments.callee, this, arguments);
                            arguments = J$.N(761, 'arguments', arguments, 4);
                            port = J$.N(769, 'port', port, 4);
                            J$.X1(745, J$.M(737, J$.R(713, 'console', console, 2), 'log', 0)(J$.B(42, '+', J$.T(721, 'PORT IN USE AT: ', 21, false), J$.R(729, 'port', port, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(897, J$e);
                        } finally {
                            if (J$.Fr(905))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 753)));
        } catch (J$e) {
            J$.Ex(913, J$e);
        } finally {
            if (J$.Sr(921)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
