J$.iids = {"9":[1,19,1,26],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[3,1,3,12],"57":[3,13,3,16],"65":[3,1,3,17],"73":[3,1,3,17],"81":[6,1,6,12],"89":[6,13,6,17],"97":[6,1,6,18],"105":[6,1,6,18],"113":[1,1,8,1],"121":[1,1,8,1],"129":[1,1,8,1],"137":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var expandTilde = require('expand-tilde');\n\nexpandTilde('~')\n//=> '/Users/jonschlinkert'\n\nexpandTilde('~+')\n//=> process.cwd()\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'expandTilde', expandTilde, 0);
            var expandTilde = J$.X1(41, J$.W(33, 'expandTilde', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'expand-tilde', 21, false)), expandTilde, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'expandTilde', expandTilde, 1), 0)(J$.T(57, '~', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'expandTilde', expandTilde, 1), 0)(J$.T(89, '~+', 21, false)));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
