J$.iids = {"9":[1,18,1,25],"17":[1,26,1,39],"25":[1,18,1,40],"33":[1,18,1,40],"41":[1,18,1,40],"49":[3,12,3,31],"57":[3,12,3,31],"65":[3,12,3,31],"73":[4,15,4,25],"81":[4,26,4,30],"89":[4,32,4,41],"97":[4,15,4,42],"105":[4,15,4,42],"113":[4,15,4,42],"121":[6,1,6,8],"129":[6,13,6,20],"137":[6,1,6,21],"139":[6,1,6,12],"145":[6,1,6,22],"153":[1,1,7,1],"161":[1,1,7,1],"169":[1,1,7,1],"177":[1,1,7,1],"185":[1,1,7,1],"193":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var replaceExt = require('replace-ext');\n\nvar path = '/some/dir/file.js';\nvar newPath = replaceExt(path, '.coffee');\n\nconsole.log(newPath); // /some/dir/file.coffee\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'replaceExt', replaceExt, 0);
            J$.N(169, 'path', path, 0);
            J$.N(177, 'newPath', newPath, 0);
            var replaceExt = J$.X1(41, J$.W(33, 'replaceExt', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'replace-ext', 21, false)), replaceExt, 3));
            var path = J$.X1(65, J$.W(57, 'path', J$.T(49, '/some/dir/file.js', 21, false), path, 3));
            var newPath = J$.X1(113, J$.W(105, 'newPath', J$.F(97, J$.R(73, 'replaceExt', replaceExt, 1), 0)(J$.R(81, 'path', path, 1), J$.T(89, '.coffee', 21, false)), newPath, 3));
            J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.R(129, 'newPath', newPath, 1)));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
