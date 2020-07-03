J$.iids = {"9":[1,13,1,20],"17":[1,21,1,51],"25":[1,13,1,52],"33":[1,13,1,52],"41":[1,13,1,52],"49":[5,1,5,6],"57":[6,28,6,32],"65":[7,28,7,31],"73":[8,28,8,30],"81":[9,28,9,30],"89":[10,28,10,29],"97":[5,14,11,2],"105":[5,1,11,3],"107":[5,1,5,13],"113":[5,1,11,4],"121":[1,1,12,1],"129":[1,1,12,1],"137":[1,1,12,1],"145":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var owasp = require('owasp-password-strength-test');\n\n// Pass a hash of settings to the `config` method. The settings shown here are\n// the defaults.\nowasp.config({\n  allowPassphrases       : true,\n  maxLength              : 128,\n  minLength              : 10,\n  minPhraseLength        : 20,\n  minOptionalTestsToPass : 4,\n});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'owasp', owasp, 0);
            var owasp = J$.X1(41, J$.W(33, 'owasp', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'owasp-password-strength-test', 21, false)), owasp, 3));
            J$.X1(113, J$.M(105, J$.R(49, 'owasp', owasp, 1), 'config', 0)(J$.T(97, {
                allowPassphrases: J$.T(57, true, 23, false),
                maxLength: J$.T(65, 128, 22, false),
                minLength: J$.T(73, 10, 22, false),
                minPhraseLength: J$.T(81, 20, 22, false),
                minOptionalTestsToPass: J$.T(89, 4, 22, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(137, J$e);
        } finally {
            if (J$.Sr(145)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
