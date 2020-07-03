J$.iids = {"9":[1,17,1,24],"17":[1,25,1,39],"25":[1,17,1,40],"33":[2,10,2,17],"41":[2,18,2,22],"49":[2,10,2,23],"57":[1,17,1,40],"65":[1,17,1,40],"73":[2,10,2,23],"81":[2,10,2,23],"89":[4,1,4,10],"97":[4,12,4,15],"105":[4,17,4,20],"113":[4,22,4,25],"121":[4,27,4,29],"129":[4,27,4,33],"137":[4,11,4,34],"145":[4,1,4,35],"153":[4,41,4,48],"161":[4,41,4,55],"169":[4,1,4,56],"171":[4,1,4,40],"177":[4,1,4,57],"185":[1,1,5,1],"193":[1,1,5,1],"201":[1,1,5,1],"209":[1,1,5,1],"217":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var streamify = require('stream-array'),\n    os = require('os');\n\nstreamify(['1', '2', '3', os.EOL]).pipe(process.stdout);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'streamify', streamify, 0);
            J$.N(201, 'os', os, 0);
            var streamify = J$.X1(65, J$.W(57, 'streamify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'stream-array', 21, false)), streamify, 3)), os = J$.X1(81, J$.W(73, 'os', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'os', 21, false)), os, 3));
            J$.X1(177, J$.M(169, J$.F(145, J$.R(89, 'streamify', streamify, 1), 0)(J$.T(137, [
                J$.T(97, '1', 21, false),
                J$.T(105, '2', 21, false),
                J$.T(113, '3', 21, false),
                J$.G(129, J$.R(121, 'os', os, 1), 'EOL', 0)
            ], 10, false)), 'pipe', 0)(J$.G(161, J$.R(153, 'process', process, 2), 'stdout', 0)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
