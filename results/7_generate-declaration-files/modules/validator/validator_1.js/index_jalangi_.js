J$.iids = {"9":[1,17,1,24],"17":[1,25,1,36],"25":[1,17,1,37],"33":[1,17,1,37],"41":[1,17,1,37],"49":[3,1,3,10],"57":[3,19,3,32],"65":[3,1,3,33],"67":[3,1,3,18],"73":[3,1,3,34],"81":[1,1,4,1],"89":[1,1,4,1],"97":[1,1,4,1],"105":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var validator = require('validator');\n\nvalidator.isEmail('foo@bar.com'); //=> true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'validator', validator, 0);
            var validator = J$.X1(41, J$.W(33, 'validator', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'validator', 21, false)), validator, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'validator', validator, 1), 'isEmail', 0)(J$.T(57, 'foo@bar.com', 21, false)));
        } catch (J$e) {
            J$.Ex(97, J$e);
        } finally {
            if (J$.Sr(105)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
