J$.iids = {"9":[1,16,1,23],"17":[1,24,1,36],"25":[1,16,1,37],"33":[1,16,1,37],"41":[1,16,1,37],"49":[3,1,3,9],"57":[3,10,3,57],"65":[3,1,3,58],"73":[3,1,3,59],"81":[6,1,6,9],"89":[6,10,6,45],"97":[6,1,6,46],"105":[6,1,6,47],"113":[1,1,8,1],"121":[1,1,8,1],"129":[1,1,8,1],"137":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isGitUrl = require('is-git-url');\n\nisGitUrl('git://github.com/jonschlinkert/is-git-url.git');\n//=> true\n\nisGitUrl('https://github.com/jonschlinkert/');\n//=> false\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'isGitUrl', isGitUrl, 0);
            var isGitUrl = J$.X1(41, J$.W(33, 'isGitUrl', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'is-git-url', 21, false)), isGitUrl, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'isGitUrl', isGitUrl, 1), 0)(J$.T(57, 'git://github.com/jonschlinkert/is-git-url.git', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'isGitUrl', isGitUrl, 1), 0)(J$.T(89, 'https://github.com/jonschlinkert/', 21, false)));
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
