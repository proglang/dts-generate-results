J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[2,1,2,8],"57":[2,13,2,23],"65":[2,24,2,35],"73":[2,13,2,36],"81":[2,1,2,37],"83":[2,1,2,12],"89":[2,1,2,38],"97":[5,1,5,8],"105":[5,13,5,23],"113":[5,24,5,49],"121":[5,13,5,50],"129":[5,1,5,51],"131":[5,1,5,12],"137":[5,1,5,52],"145":[1,1,7,1],"153":[1,1,7,1],"161":[1,1,7,1],"169":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isRelative = require('is-relative');\nconsole.log(isRelative('README.md'));\n//=> true\n\nconsole.log(isRelative('/User/dev/foo/README.md'));\n//=> false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'isRelative', isRelative, 0);
            var isRelative = J$.X1(41, J$.W(33, 'isRelative', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-relative', 21, false)), isRelative, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'isRelative', isRelative, 1), 0)(J$.T(65, 'README.md', 21, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.F(121, J$.R(105, 'isRelative', isRelative, 1), 0)(J$.T(113, '/User/dev/foo/README.md', 21, false))));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
