J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[2,14,2,19],"41":[2,14,2,34],"43":[2,14,2,32],"49":[1,13,1,29],"57":[1,13,1,29],"65":[2,14,2,34],"73":[2,14,2,34],"81":[4,1,4,7],"89":[4,12,4,34],"97":[4,36,4,58],"105":[7,5,7,12],"113":[7,17,7,20],"121":[7,5,7,21],"123":[7,5,7,16],"129":[7,5,7,22],"137":[4,60,8,2],"145":[4,60,8,2],"153":[4,60,8,2],"161":[4,60,8,2],"169":[4,60,8,2],"177":[4,1,8,3],"179":[4,1,4,11],"185":[4,1,8,4],"193":[9,1,9,7],"201":[9,12,9,16],"209":[9,1,9,17],"211":[9,1,9,11],"217":[9,1,9,18],"225":[10,1,10,7],"233":[10,12,10,34],"241":[11,5,11,12],"249":[11,17,11,20],"257":[11,5,11,21],"259":[11,5,11,16],"265":[11,5,11,22],"273":[10,36,12,2],"281":[10,36,12,2],"289":[10,36,12,2],"297":[10,36,12,2],"305":[10,36,12,2],"313":[10,1,12,3],"315":[10,1,10,11],"321":[10,1,12,4],"329":[1,1,13,1],"337":[1,1,13,1],"345":[1,1,13,1],"353":[4,60,8,2],"361":[4,60,8,2],"369":[10,36,12,2],"377":[10,36,12,2],"385":[1,1,13,1],"393":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var redis = require(\"redis\"),\n    client = redis.createClient();\n\nclient.set(\"foo_rand000000000000\", \"some fantastic value\", function (err, reply) {\n    // This will either result in an error (flush parameter is set to true)\n    // or will silently fail and this callback will not be called at all (flush set to false)\n    console.log(err);\n});\nclient.end(true); // No further commands will be processed\nclient.get(\"foo_rand000000000000\", function (err, reply) {\n    console.log(err); // => 'The connection has already been closed.'\n});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(329, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(337, 'redis', redis, 0);
            J$.N(345, 'client', client, 0);
            var redis = J$.X1(57, J$.W(49, 'redis', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "redis", 21, false)), redis, 3)), client = J$.X1(73, J$.W(65, 'client', J$.M(41, J$.R(33, 'redis', redis, 1), 'createClient', 0)(), client, 3));
            J$.X1(185, J$.M(177, J$.R(81, 'client', client, 1), 'set', 0)(J$.T(89, "foo_rand000000000000", 21, false), J$.T(97, "some fantastic value", 21, false), J$.T(169, function (err, reply) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            err = J$.N(153, 'err', err, 4);
                            reply = J$.N(161, 'reply', reply, 4);
                            J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.R(113, 'err', err, 0)));
                        } catch (J$e) {
                            J$.Ex(353, J$e);
                        } finally {
                            if (J$.Fr(361))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 137)));
            J$.X1(217, J$.M(209, J$.R(193, 'client', client, 1), 'end', 0)(J$.T(201, true, 23, false)));
            J$.X1(321, J$.M(313, J$.R(225, 'client', client, 1), 'get', 0)(J$.T(233, "foo_rand000000000000", 21, false), J$.T(305, function (err, reply) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(273, arguments.callee, this, arguments);
                            arguments = J$.N(281, 'arguments', arguments, 4);
                            err = J$.N(289, 'err', err, 4);
                            reply = J$.N(297, 'reply', reply, 4);
                            J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.R(249, 'err', err, 0)));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 273)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
