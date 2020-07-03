J$.iids = {"9":[2,12,2,19],"17":[2,20,2,32],"25":[2,12,2,33],"33":[2,12,2,33],"41":[2,12,2,33],"49":[4,1,4,5],"57":[4,6,4,24],"65":[4,26,6,2],"73":[4,26,6,2],"81":[4,26,6,2],"89":[4,26,6,2],"97":[4,26,6,2],"105":[4,1,6,3],"113":[4,1,6,4],"121":[1,1,7,1],"129":[1,1,7,1],"137":[4,26,6,2],"145":[4,26,6,2],"153":[1,1,7,1],"161":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"\nvar bump = require('bump-regex');\n\nbump('version: \"0.1.2\"', function(err, out) {\n  // => 'version: \"0.1.3\"'\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'bump', bump, 0);
            var bump = J$.X1(41, J$.W(33, 'bump', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'bump-regex', 21, false)), bump, 3));
            J$.X1(113, J$.F(105, J$.R(49, 'bump', bump, 1), 0)(J$.T(57, 'version: "0.1.2"', 21, false), J$.T(97, function (err, out) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            err = J$.N(81, 'err', err, 4);
                            out = J$.N(89, 'out', out, 4);
                        } catch (J$e) {
                            J$.Ex(137, J$e);
                        } finally {
                            if (J$.Fr(145))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 65)));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
