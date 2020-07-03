J$.iids = {"9":[1,12,1,19],"17":[1,20,1,26],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[3,1,3,5],"57":[3,1,3,7],"65":[3,1,3,8],"73":[6,1,6,5],"81":[6,10,6,14],"89":[6,6,6,16],"97":[6,1,6,17],"105":[6,1,6,18],"113":[1,1,7,1],"121":[1,1,7,1],"129":[1,1,7,1],"137":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var week = require('week');\n\nweek();\n//=> '50' (December)\n\nweek(new Date());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'week', week, 0);
            var week = J$.X1(41, J$.W(33, 'week', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'week', 21, false)), week, 3));
            J$.X1(65, J$.F(57, J$.R(49, 'week', week, 1), 0)());
            J$.X1(105, J$.F(97, J$.R(73, 'week', week, 1), 0)(J$.F(89, J$.R(81, 'Date', Date, 2), 1)()));
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
