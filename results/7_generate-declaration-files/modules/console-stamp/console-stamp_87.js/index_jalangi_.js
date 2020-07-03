J$.iids = {"9":[2,1,2,8],"17":[3,5,3,12],"25":[3,17,3,20],"33":[3,5,3,21],"35":[3,5,3,16],"41":[3,5,3,22],"49":[2,17,4,2],"57":[2,17,4,2],"65":[2,17,4,2],"73":[2,17,4,2],"81":[2,1,4,2],"89":[2,1,4,2],"97":[5,1,5,8],"105":[6,5,6,12],"113":[6,17,6,20],"121":[6,5,6,21],"123":[6,5,6,16],"129":[6,5,6,22],"137":[7,5,7,12],"145":[7,18,7,19],"153":[7,5,7,20],"155":[7,5,7,17],"161":[7,5,7,21],"169":[5,17,8,2],"177":[5,17,8,2],"185":[5,17,8,2],"193":[5,17,8,2],"201":[5,1,8,2],"209":[5,1,8,2],"217":[11,1,11,8],"225":[11,9,11,24],"233":[11,1,11,25],"241":[11,26,11,33],"249":[12,14,12,24],"257":[14,16,14,17],"265":[15,16,15,17],"273":[13,13,16,6],"281":[17,15,17,22],"289":[17,24,17,30],"297":[17,32,17,38],"305":[17,40,17,47],"313":[17,49,17,56],"321":[17,14,17,57],"329":[18,12,18,19],"337":[11,35,19,2],"345":[11,1,19,3],"353":[11,1,19,4],"361":[1,1,20,1],"369":[2,17,4,2],"377":[2,17,4,2],"385":[5,17,8,2],"393":[5,17,8,2],"401":[1,1,20,1],"409":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Extending the console object with custom methods\nconsole.debug = function(msg) {\n    console.log(msg);\n}\nconsole.fatal = function(msg) {\n    console.log(msg);\n    process.exit(1);\n}\n\n// Initialising the output formatter\nrequire('console-stamp')(console, {\n    pattern: 'HH:MM:ss',\n    extend: {\n        debug: 5,\n        fatal: 0,\n    },\n    include: ['debug', 'info', 'warn', 'error', 'fatal'],\n    level: 'debug',\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(361, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.X1(89, J$.P(81, J$.R(9, 'console', console, 2), 'debug', J$.T(73, function (msg) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(49, arguments.callee, this, arguments);
                            arguments = J$.N(57, 'arguments', arguments, 4);
                            msg = J$.N(65, 'msg', msg, 4);
                            J$.X1(41, J$.M(33, J$.R(17, 'console', console, 2), 'log', 0)(J$.R(25, 'msg', msg, 0)));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 49), 0));
            J$.X1(209, J$.P(201, J$.R(97, 'console', console, 2), 'fatal', J$.T(193, function (msg) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(169, arguments.callee, this, arguments);
                            arguments = J$.N(177, 'arguments', arguments, 4);
                            msg = J$.N(185, 'msg', msg, 4);
                            J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.R(113, 'msg', msg, 0)));
                            J$.X1(161, J$.M(153, J$.R(137, 'process', process, 2), 'exit', 0)(J$.T(145, 1, 22, false)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 169), 0));
            J$.X1(353, J$.F(345, J$.F(233, J$.R(217, 'require', require, 2), 0)(J$.T(225, 'console-stamp', 21, false)), 0)(J$.R(241, 'console', console, 2), J$.T(337, {
                pattern: J$.T(249, 'HH:MM:ss', 21, false),
                extend: J$.T(273, {
                    debug: J$.T(257, 5, 22, false),
                    fatal: J$.T(265, 0, 22, false)
                }, 11, false),
                include: J$.T(321, [
                    J$.T(281, 'debug', 21, false),
                    J$.T(289, 'info', 21, false),
                    J$.T(297, 'warn', 21, false),
                    J$.T(305, 'error', 21, false),
                    J$.T(313, 'fatal', 21, false)
                ], 10, false),
                level: J$.T(329, 'debug', 21, false)
            }, 11, false)));
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
