J$.iids = {"9":[1,19,1,26],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[3,1,3,12],"57":[3,13,5,2],"65":[3,13,5,2],"73":[3,13,5,2],"81":[3,13,5,2],"89":[3,13,5,2],"97":[3,1,5,3],"105":[3,1,5,4],"113":[1,1,6,1],"121":[1,1,6,1],"129":[3,13,5,2],"137":[3,13,5,2],"145":[1,1,6,1],"153":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var nodeCleanup = require('node-cleanup');\n\nnodeCleanup(function (exitCode, signal) {\n    // release resources here before node exits\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'nodeCleanup', nodeCleanup, 0);
            var nodeCleanup = J$.X1(41, J$.W(33, 'nodeCleanup', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'node-cleanup', 21, false)), nodeCleanup, 3));
            J$.X1(105, J$.F(97, J$.R(49, 'nodeCleanup', nodeCleanup, 1), 0)(J$.T(89, function (exitCode, signal) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(57, arguments.callee, this, arguments);
                            arguments = J$.N(65, 'arguments', arguments, 4);
                            exitCode = J$.N(73, 'exitCode', exitCode, 4);
                            signal = J$.N(81, 'signal', signal, 4);
                        } catch (J$e) {
                            J$.Ex(129, J$e);
                        } finally {
                            if (J$.Fr(137))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 57)));
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
