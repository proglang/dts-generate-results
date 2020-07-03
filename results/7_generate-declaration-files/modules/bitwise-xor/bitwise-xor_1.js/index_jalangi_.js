J$.iids = {"9":[1,11,1,18],"17":[1,19,1,32],"25":[1,11,1,33],"33":[1,11,1,33],"41":[1,11,1,33],"49":[3,1,3,4],"57":[3,9,3,15],"65":[3,16,3,22],"73":[3,24,3,29],"81":[3,5,3,30],"89":[3,36,3,42],"97":[3,43,3,49],"105":[3,51,3,56],"113":[3,32,3,57],"121":[3,1,3,58],"129":[3,1,3,58],"137":[1,1,6,1],"145":[1,1,6,1],"153":[1,1,6,1],"161":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var xor = require('bitwise-xor');\n\nxor(new Buffer('00ff', 'hex'), new Buffer('3344', 'hex'))\n\n// returns <Buffer 33 bb>\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'xor', xor, 0);
            var xor = J$.X1(41, J$.W(33, 'xor', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'bitwise-xor', 21, false)), xor, 3));
            J$.X1(129, J$.F(121, J$.R(49, 'xor', xor, 1), 0)(J$.F(81, J$.R(57, 'Buffer', Buffer, 2), 1)(J$.T(65, '00ff', 21, false), J$.T(73, 'hex', 21, false)), J$.F(113, J$.R(89, 'Buffer', Buffer, 2), 1)(J$.T(97, '3344', 21, false), J$.T(105, 'hex', 21, false))));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
