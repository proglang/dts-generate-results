J$.iids = {"9":[1,14,1,21],"17":[1,22,1,30],"25":[1,14,1,31],"33":[1,14,1,31],"41":[1,14,1,31],"49":[3,1,3,7],"57":[3,8,3,27],"65":[3,1,3,28],"73":[3,1,3,29],"81":[4,1,4,7],"89":[4,8,4,23],"97":[4,1,4,24],"105":[4,1,4,25],"113":[5,1,5,7],"121":[5,8,5,17],"129":[5,1,5,18],"137":[5,1,5,19],"145":[6,1,6,7],"153":[6,8,6,22],"161":[6,1,6,23],"169":[6,1,6,24],"177":[1,1,7,1],"185":[1,1,7,1],"193":[1,1,7,1],"201":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var opener = require(\"opener\");\n\nopener(\"http://google.com\");\nopener(\"./my-file.txt\");\nopener(\"firefox\");\nopener(\"npm run lint\");\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'opener', opener, 0);
            var opener = J$.X1(41, J$.W(33, 'opener', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "opener", 21, false)), opener, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'opener', opener, 1), 0)(J$.T(57, "http://google.com", 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'opener', opener, 1), 0)(J$.T(89, "./my-file.txt", 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'opener', opener, 1), 0)(J$.T(121, "firefox", 21, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'opener', opener, 1), 0)(J$.T(153, "npm run lint", 21, false)));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
