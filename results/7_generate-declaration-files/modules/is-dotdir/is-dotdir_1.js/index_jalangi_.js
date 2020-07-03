J$.iids = {"9":[1,16,1,23],"17":[1,24,1,35],"25":[1,16,1,36],"33":[1,16,1,36],"41":[1,16,1,36],"49":[3,1,3,9],"57":[3,10,3,28],"65":[3,1,3,29],"73":[3,1,3,30],"81":[6,1,6,9],"89":[6,10,6,23],"97":[6,1,6,24],"105":[6,1,6,25],"113":[1,1,8,1],"121":[1,1,8,1],"129":[1,1,8,1],"137":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isDotdir = require('is-dotdir');\n\nisDotdir('a/b/c/.gitignore');\n//=> false\n\nisDotdir('a/.git/a/b/');\n//=> true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'isDotdir', isDotdir, 0);
            var isDotdir = J$.X1(41, J$.W(33, 'isDotdir', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-dotdir', 21, false)), isDotdir, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isDotdir', isDotdir, 1), 0)(J$.T(57, 'a/b/c/.gitignore', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'isDotdir', isDotdir, 1), 0)(J$.T(89, 'a/.git/a/b/', 21, false)));
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
