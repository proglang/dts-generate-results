J$.iids = {"9":[1,12,1,19],"17":[1,20,1,26],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[3,19,3,23],"57":[5,3,5,10],"65":[5,11,5,16],"73":[5,3,5,17],"81":[5,3,5,18],"89":[7,3,7,9],"97":[7,10,7,15],"105":[7,3,7,16],"113":[7,3,7,17],"121":[3,32,8,2],"129":[3,32,8,2],"137":[3,32,8,2],"145":[3,32,8,2],"153":[3,32,8,2],"161":[3,15,8,3],"163":[3,19,3,31],"169":[3,15,8,3],"177":[3,15,8,3],"185":[10,1,10,8],"193":[10,14,12,2],"201":[10,14,12,2],"209":[10,14,12,2],"217":[10,14,12,2],"225":[10,1,12,3],"227":[10,1,10,13],"233":[12,10,14,2],"241":[12,10,14,2],"249":[12,10,14,2],"257":[12,10,14,2],"265":[10,1,14,3],"267":[10,1,12,9],"273":[10,1,14,4],"281":[1,1,15,1],"289":[1,1,15,1],"297":[1,1,15,1],"305":[3,32,8,2],"313":[3,32,8,2],"321":[10,14,12,2],"329":[10,14,12,2],"337":[12,10,14,2],"345":[12,10,14,2],"353":[1,1,15,1],"361":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var RSVP = require('rsvp');\n\nvar promise = new RSVP.Promise(function(resolve, reject) {\n  // succeed\n  resolve(value);\n  // or reject\n  reject(error);\n});\n\npromise.then(function(value) {\n  // success\n}).catch(function(error) {\n  // failure\n});\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'RSVP', RSVP, 0);
            J$.N(297, 'promise', promise, 0);
            var RSVP = J$.X1(41, J$.W(33, 'RSVP', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'rsvp', 21, false)), RSVP, 3));
            var promise = J$.X1(177, J$.W(169, 'promise', J$.M(161, J$.R(49, 'RSVP', RSVP, 1), 'Promise', 2)(J$.T(153, function (resolve, reject) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            resolve = J$.N(137, 'resolve', resolve, 4);
                            reject = J$.N(145, 'reject', reject, 4);
                            J$.X1(81, J$.F(73, J$.R(57, 'resolve', resolve, 0), 0)(J$.R(65, 'value', value, 2)));
                            J$.X1(113, J$.F(105, J$.R(89, 'reject', reject, 0), 0)(J$.R(97, 'error', error, 2)));
                        } catch (J$e) {
                            J$.Ex(305, J$e);
                        } finally {
                            if (J$.Fr(313))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121)), promise, 3));
            J$.X1(273, J$.M(265, J$.M(225, J$.R(185, 'promise', promise, 1), 'then', 0)(J$.T(217, function (value) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            value = J$.N(209, 'value', value, 4);
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193)), 'catch', 0)(J$.T(257, function (error) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            error = J$.N(249, 'error', error, 4);
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
