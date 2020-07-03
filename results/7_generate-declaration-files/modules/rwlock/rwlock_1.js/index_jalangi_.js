J$.iids = {"9":[1,21,1,28],"17":[1,29,1,37],"25":[1,21,1,38],"33":[1,21,1,38],"41":[1,21,1,38],"49":[3,16,3,29],"57":[3,12,3,31],"65":[3,12,3,31],"73":[3,12,3,31],"81":[1,1,4,1],"89":[1,1,4,1],"97":[1,1,4,1],"105":[1,1,4,1],"113":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ReadWriteLock = require('rwlock');\n\nvar lock = new ReadWriteLock();\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'ReadWriteLock', ReadWriteLock, 0);
            J$.N(97, 'lock', lock, 0);
            var ReadWriteLock = J$.X1(41, J$.W(33, 'ReadWriteLock', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'rwlock', 21, false)), ReadWriteLock, 3));
            var lock = J$.X1(73, J$.W(65, 'lock', J$.F(57, J$.R(49, 'ReadWriteLock', ReadWriteLock, 1), 1)(), lock, 3));
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
