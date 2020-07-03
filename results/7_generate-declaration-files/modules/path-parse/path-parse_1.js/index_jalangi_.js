J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[3,1,3,10],"57":[3,11,3,36],"65":[3,1,3,37],"73":[3,1,3,38],"81":[1,1,11,1],"89":[1,1,11,1],"97":[1,1,11,1],"105":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var pathParse = require('path-parse');\n\npathParse('/home/user/dir/file.txt');\n//=> {\n//       root : \"/\",\n//       dir : \"/home/user/dir\",\n//       base : \"file.txt\",\n//       ext : \".txt\",\n//       name : \"file\"\n//   }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'pathParse', pathParse, 0);
            var pathParse = J$.X1(41, J$.W(33, 'pathParse', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'path-parse', 21, false)), pathParse, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'pathParse', pathParse, 1), 0)(J$.T(57, '/home/user/dir/file.txt', 21, false)));
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
