J$.iids = {"9":[1,15,1,22],"17":[1,23,1,36],"25":[1,15,1,37],"33":[1,15,1,37],"41":[1,15,1,37],"49":[2,22,2,29],"57":[2,18,2,31],"65":[2,18,2,31],"73":[2,18,2,31],"81":[4,1,4,11],"89":[5,6,5,13],"97":[5,19,5,21],"105":[5,6,5,22],"107":[5,6,5,18],"113":[5,6,5,23],"121":[4,17,6,2],"129":[4,17,6,2],"137":[4,17,6,2],"145":[4,17,6,2],"153":[4,17,6,2],"161":[4,1,6,3],"163":[4,1,4,16],"169":[4,1,6,3],"177":[8,1,8,11],"185":[9,6,9,13],"193":[9,19,9,21],"201":[9,6,9,22],"203":[9,6,9,18],"209":[9,6,9,23],"217":[8,17,10,2],"225":[8,17,10,2],"233":[8,17,10,2],"241":[8,17,10,2],"249":[8,17,10,2],"257":[8,1,10,3],"259":[8,1,8,16],"265":[8,1,10,3],"273":[1,1,11,1],"281":[1,1,11,1],"289":[1,1,11,1],"297":[4,17,6,2],"305":[4,17,6,2],"313":[8,17,10,2],"321":[8,17,10,2],"329":[1,1,11,1],"337":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FlakeId = require('flake-idgen');\nvar flakeIdGen = new FlakeId();\n\nflakeIdGen.next(function (err, id) {\n     console.info(id);\n})\n\nflakeIdGen.next(function (err, id) {\n     console.info(id);\n})\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(273, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(281, 'FlakeId', FlakeId, 0);
            J$.N(289, 'flakeIdGen', flakeIdGen, 0);
            var FlakeId = J$.X1(41, J$.W(33, 'FlakeId', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'flake-idgen', 21, false)), FlakeId, 3));
            var flakeIdGen = J$.X1(73, J$.W(65, 'flakeIdGen', J$.F(57, J$.R(49, 'FlakeId', FlakeId, 1), 1)(), flakeIdGen, 3));
            J$.X1(169, J$.M(161, J$.R(81, 'flakeIdGen', flakeIdGen, 1), 'next', 0)(J$.T(153, function (err, id) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            err = J$.N(137, 'err', err, 4);
                            id = J$.N(145, 'id', id, 4);
                            J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'info', 0)(J$.R(97, 'id', id, 0)));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121)));
            J$.X1(265, J$.M(257, J$.R(177, 'flakeIdGen', flakeIdGen, 1), 'next', 0)(J$.T(249, function (err, id) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            err = J$.N(233, 'err', err, 4);
                            id = J$.N(241, 'id', id, 4);
                            J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'info', 0)(J$.R(193, 'id', id, 0)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
