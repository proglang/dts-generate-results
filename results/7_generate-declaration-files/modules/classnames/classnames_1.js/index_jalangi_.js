J$.iids = {"9":[1,18,1,25],"17":[1,26,1,38],"25":[1,18,1,39],"33":[1,18,1,39],"41":[1,18,1,39],"49":[2,1,2,11],"57":[2,12,2,17],"65":[2,19,2,24],"73":[2,1,2,25],"81":[2,1,2,26],"89":[1,1,3,1],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var classNames = require('classnames');\nclassNames('foo', 'bar'); // => 'foo bar'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'classNames', classNames, 0);
            var classNames = J$.X1(41, J$.W(33, 'classNames', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'classnames', 21, false)), classNames, 3));
            J$.X1(81, J$.F(73, J$.R(49, 'classNames', classNames, 1), 0)(J$.T(57, 'foo', 21, false), J$.T(65, 'bar', 21, false)));
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
