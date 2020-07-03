J$.iids = {"9":[1,11,1,18],"17":[1,19,1,31],"25":[1,11,1,32],"33":[1,11,1,32],"41":[1,11,1,32],"49":[3,1,3,4],"57":[3,10,3,21],"65":[3,23,5,2],"73":[3,23,5,2],"81":[3,23,5,2],"89":[3,1,5,3],"91":[3,1,3,9],"97":[3,1,5,3],"105":[1,1,6,1],"113":[1,1,6,1],"121":[3,23,5,2],"129":[3,23,5,2],"137":[1,1,6,1],"145":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ncp = require(\"copy-paste\");\n\nncp.copy('some text', function () {\n  // complete...\n})\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(105, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(113, 'ncp', ncp, 0);
            var ncp = J$.X1(41, J$.W(33, 'ncp', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "copy-paste", 21, false)), ncp, 3));
            J$.X1(97, J$.M(89, J$.R(49, 'ncp', ncp, 1), 'copy', 0)(J$.T(57, 'some text', 21, false), J$.T(81, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(121, J$e);
                        } finally {
                            if (J$.Fr(129))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 65)));
        } catch (J$e) {
            J$.Ex(137, J$e);
        } finally {
            if (J$.Sr(145)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
