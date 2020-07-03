J$.iids = {"9":[1,21,1,28],"17":[1,29,1,45],"25":[1,21,1,46],"33":[1,21,1,46],"41":[1,21,1,46],"49":[3,1,3,14],"57":[3,15,3,28],"65":[3,1,3,29],"73":[3,1,3,30],"81":[1,1,5,1],"89":[1,1,5,1],"97":[1,1,5,1],"105":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var removeNewline = require('newline-remove');\n\nremoveNewline('foo\\n bar\\n');\n// => 'foo bar'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'removeNewline', removeNewline, 0);
            var removeNewline = J$.X1(41, J$.W(33, 'removeNewline', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'newline-remove', 21, false)), removeNewline, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'removeNewline', removeNewline, 1), 0)(J$.T(57, 'foo\n bar\n', 21, false)));
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
