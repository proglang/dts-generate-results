J$.iids = {"9":[2,13,2,20],"17":[2,21,2,28],"25":[2,13,2,29],"33":[2,13,2,29],"41":[2,13,2,29],"49":[3,13,3,18],"57":[3,13,3,32],"59":[3,13,3,30],"65":[3,13,3,32],"73":[3,13,3,32],"81":[5,1,5,6],"89":[6,5,6,12],"97":[6,17,6,97],"105":[6,5,6,98],"107":[6,5,6,16],"113":[6,5,6,99],"121":[5,18,7,2],"129":[5,18,7,2],"137":[5,18,7,2],"145":[7,4,7,6],"153":[5,1,7,7],"155":[5,1,5,17],"161":[5,1,7,8],"169":[11,1,11,6],"177":[11,12,11,14],"185":[11,1,11,15],"187":[11,1,11,11],"193":[11,1,11,16],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"225":[5,18,7,2],"233":[5,18,7,2],"241":[1,1,12,1],"249":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// In the browser distribution, a global `lolex` is already available\nvar lolex = require(\"lolex\");\nvar clock = lolex.createClock();\n\nclock.setTimeout(function () {\n    console.log(\"The poblano is a mild chili pepper originating in the state of Puebla, Mexico.\");\n}, 15);\n\n// ...\n\nclock.tick(15);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(201, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(209, 'lolex', lolex, 0);
            J$.N(217, 'clock', clock, 0);
            var lolex = J$.X1(41, J$.W(33, 'lolex', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "lolex", 21, false)), lolex, 3));
            var clock = J$.X1(73, J$.W(65, 'clock', J$.M(57, J$.R(49, 'lolex', lolex, 1), 'createClock', 0)(), clock, 3));
            J$.X1(161, J$.M(153, J$.R(81, 'clock', clock, 1), 'setTimeout', 0)(J$.T(137, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, "The poblano is a mild chili pepper originating in the state of Puebla, Mexico.", 21, false)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121), J$.T(145, 15, 22, false)));
            J$.X1(193, J$.M(185, J$.R(169, 'clock', clock, 1), 'tick', 0)(J$.T(177, 15, 22, false)));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
