J$.iids = {"9":[1,12,1,19],"17":[1,20,1,35],"25":[1,12,1,36],"33":[1,12,1,36],"41":[1,12,1,36],"49":[3,1,3,5],"57":[4,3,4,10],"65":[4,15,4,19],"73":[4,3,4,20],"75":[4,3,4,14],"81":[4,3,4,21],"89":[3,6,5,2],"97":[3,6,5,2],"105":[3,6,5,2],"113":[5,4,5,18],"121":[3,1,5,19],"129":[3,1,5,20],"137":[1,1,6,1],"145":[1,1,6,1],"153":[3,6,5,2],"161":[3,6,5,2],"169":[1,1,6,1],"177":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var bind = require('bind-ponyfill');\n\nbind(function() {\n  console.log(this);\n}, 'Hello world!');\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'bind', bind, 0);
            var bind = J$.X1(41, J$.W(33, 'bind', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'bind-ponyfill', 21, false)), bind, 3));
            J$.X1(129, J$.F(121, J$.R(49, 'bind', bind, 1), 0)(J$.T(105, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            J$.X1(81, J$.M(73, J$.R(57, 'console', console, 2), 'log', 0)(J$.R(65, 'this', this, 0)));
                        } catch (J$e) {
                            J$.Ex(153, J$e);
                        } finally {
                            if (J$.Fr(161))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 89), J$.T(113, 'Hello world!', 21, false)));
        } catch (J$e) {
            J$.Ex(169, J$e);
        } finally {
            if (J$.Sr(177)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
