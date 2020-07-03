J$.iids = {"9":[1,22,1,29],"17":[1,30,1,47],"25":[1,22,1,48],"33":[1,22,1,48],"41":[1,22,1,48],"49":[3,1,3,15],"57":[3,26,3,40],"65":[3,1,3,41],"67":[3,1,3,25],"73":[3,1,3,42],"81":[6,1,6,15],"89":[6,26,6,45],"97":[6,1,6,46],"99":[6,1,6,25],"105":[6,1,6,47],"113":[1,1,8,1],"121":[1,1,8,1],"129":[1,1,8,1],"137":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var phoneFormatter = require('phone-formatter');\n\nphoneFormatter.normalize('212.555.1212');\n// returns \"2125551212\"\n\nphoneFormatter.normalize('+1 (212) 555-1212');\n// returns \"2125551212\"\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'phoneFormatter', phoneFormatter, 0);
            var phoneFormatter = J$.X1(41, J$.W(33, 'phoneFormatter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'phone-formatter', 21, false)), phoneFormatter, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'phoneFormatter', phoneFormatter, 1), 'normalize', 0)(J$.T(57, '212.555.1212', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'phoneFormatter', phoneFormatter, 1), 'normalize', 0)(J$.T(89, '+1 (212) 555-1212', 21, false)));
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
