J$.iids = {"8":[8,7,8,10],"9":[1,13,1,20],"10":[13,12,13,19],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,31],"41":[1,13,1,31],"49":[1,13,1,31],"57":[5,13,5,18],"65":[5,25,5,31],"73":[5,33,5,34],"81":[5,13,5,35],"83":[5,13,5,24],"89":[5,13,5,35],"97":[5,13,5,35],"105":[7,1,7,6],"113":[7,12,7,14],"121":[8,7,8,10],"129":[8,20,8,23],"137":[8,20,8,23],"145":[8,14,8,23],"153":[9,3,9,10],"161":[9,15,9,30],"169":[9,32,9,38],"177":[9,3,9,39],"179":[9,3,9,14],"185":[9,3,9,39],"193":[7,16,10,2],"201":[7,16,10,2],"209":[7,16,10,2],"217":[7,16,10,2],"225":[7,16,10,2],"233":[7,1,10,3],"235":[7,1,7,11],"241":[7,1,10,3],"249":[13,3,13,5],"257":[13,6,13,10],"265":[13,12,13,15],"273":[13,18,13,19],"281":[13,3,13,20],"289":[13,3,13,20],"297":[12,1,14,2],"305":[12,1,14,2],"313":[12,1,14,2],"321":[12,1,14,2],"329":[1,1,15,1],"337":[1,1,15,1],"345":[1,1,15,1],"353":[12,1,14,2],"361":[1,1,15,1],"369":[8,3,8,25],"377":[7,16,10,2],"385":[7,16,10,2],"393":[12,1,14,2],"401":[12,1,14,2],"409":[1,1,15,1],"417":[1,1,15,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var steed = require('steed')()\n// or\n// var steed = require('steed')\n\nvar queue = steed.queue(worker, 1)\n\nqueue.push(42, function (err, result) {\n  if (err) { throw err }\n  console.log('the result is', result)\n})\n\nfunction worker (arg, cb) {\n  cb(null, arg * 2)\n}\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(329, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            function worker(arg, cb) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(297, arguments.callee, this, arguments);
                            arguments = J$.N(305, 'arguments', arguments, 4);
                            arg = J$.N(313, 'arg', arg, 4);
                            cb = J$.N(321, 'cb', cb, 4);
                            J$.X1(289, J$.F(281, J$.R(249, 'cb', cb, 0), 0)(J$.T(257, null, 25, false), J$.B(10, '*', J$.R(265, 'arg', arg, 0), J$.T(273, 2, 22, false), 0)));
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(337, 'steed', steed, 0);
            J$.N(345, 'queue', queue, 0);
            worker = J$.N(361, 'worker', J$.T(353, worker, 12, false, 297), 0);
            var steed = J$.X1(49, J$.W(41, 'steed', J$.F(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'steed', 21, false)), 0)(), steed, 3));
            var queue = J$.X1(97, J$.W(89, 'queue', J$.M(81, J$.R(57, 'steed', steed, 1), 'queue', 0)(J$.R(65, 'worker', worker, 1), J$.T(73, 1, 22, false)), queue, 3));
            J$.X1(241, J$.M(233, J$.R(105, 'queue', queue, 1), 'push', 0)(J$.T(113, 42, 22, false), J$.T(225, function (err, result) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            err = J$.N(209, 'err', err, 4);
                            result = J$.N(217, 'result', result, 4);
                            if (J$.X1(369, J$.C(8, J$.R(121, 'err', err, 0)))) {
                                throw J$.X1(145, J$.Th(137, J$.R(129, 'err', err, 0)));
                            }
                            J$.X1(185, J$.M(177, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 'the result is', 21, false), J$.R(169, 'result', result, 0)));
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
