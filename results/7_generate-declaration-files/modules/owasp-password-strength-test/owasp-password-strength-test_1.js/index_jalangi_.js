J$.iids = {"9":[2,13,2,20],"17":[2,21,2,51],"25":[2,13,2,52],"33":[2,13,2,52],"41":[2,13,2,52],"49":[5,14,5,19],"57":[5,25,5,55],"65":[5,14,5,56],"67":[5,14,5,24],"73":[5,14,5,56],"81":[5,14,5,56],"89":[1,1,6,1],"97":[1,1,6,1],"105":[1,1,6,1],"113":[1,1,6,1],"121":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// require the module\nvar owasp = require('owasp-password-strength-test');\n\n// invoke test() to test the strength of a password\nvar result = owasp.test('correct horse battery staple');\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'owasp', owasp, 0);
            J$.N(105, 'result', result, 0);
            var owasp = J$.X1(41, J$.W(33, 'owasp', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'owasp-password-strength-test', 21, false)), owasp, 3));
            var result = J$.X1(81, J$.W(73, 'result', J$.M(65, J$.R(49, 'owasp', owasp, 1), 'test', 0)(J$.T(57, 'correct horse battery staple', 21, false)), result, 3));
        } catch (J$e) {
            J$.Ex(113, J$e);
        } finally {
            if (J$.Sr(121)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
