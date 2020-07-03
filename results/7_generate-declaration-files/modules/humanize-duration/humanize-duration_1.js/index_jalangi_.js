J$.iids = {"9":[1,24,1,31],"17":[1,32,1,51],"25":[1,24,1,52],"33":[1,24,1,52],"41":[1,24,1,52],"49":[2,1,2,17],"57":[2,18,2,23],"65":[2,1,2,24],"73":[2,1,2,24],"81":[1,1,3,1],"89":[1,1,3,1],"97":[1,1,3,1],"105":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var humanizeDuration = require('humanize-duration')\nhumanizeDuration(12000) // '12 seconds'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'humanizeDuration', humanizeDuration, 0);
            var humanizeDuration = J$.X1(41, J$.W(33, 'humanizeDuration', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'humanize-duration', 21, false)), humanizeDuration, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'humanizeDuration', humanizeDuration, 1), 0)(J$.T(57, 12000, 22, false)));
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
