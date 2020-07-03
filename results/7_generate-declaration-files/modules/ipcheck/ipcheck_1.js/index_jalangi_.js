J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[2,1,2,8],"57":[2,15,2,28],"65":[2,30,2,46],"73":[2,1,2,47],"75":[2,1,2,14],"81":[2,1,2,48],"89":[1,1,3,1],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var IPCheck = require('ipcheck');\nIPCheck.match('192.168.0.1', '192.168.0.1/32'); //= true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'IPCheck', IPCheck, 0);
            var IPCheck = J$.X1(41, J$.W(33, 'IPCheck', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'ipcheck', 21, false)), IPCheck, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'IPCheck', IPCheck, 1), 'match', 0)(J$.T(57, '192.168.0.1', 21, false), J$.T(65, '192.168.0.1/32', 21, false)));
        } catch (J$e) {
            J$.Ex(105, J$e);
        } finally {
            if (J$.Sr(113)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
