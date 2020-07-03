J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,14,3,26],"57":[4,9,4,16],"65":[5,10,5,12],"73":[6,10,6,12],"81":[7,11,7,14],"89":[3,34,8,2],"97":[3,14,8,3],"99":[3,14,3,33],"105":[3,14,8,3],"113":[3,14,8,3],"121":[10,1,10,8],"129":[10,13,10,19],"137":[10,1,10,20],"139":[10,1,10,12],"145":[10,1,10,21],"153":[1,1,11,1],"161":[1,1,11,1],"169":[1,1,11,1],"177":[1,1,11,1],"185":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var contentRange = require('content-range');\n\nvar header = contentRange.format({\n  unit: 'items',\n  first: 10,\n  limit: 20,\n  length: 100\n});\n\nconsole.log(header); // items 10-29/100\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'contentRange', contentRange, 0);
            J$.N(169, 'header', header, 0);
            var contentRange = J$.X1(41, J$.W(33, 'contentRange', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'content-range', 21, false)), contentRange, 3));
            var header = J$.X1(113, J$.W(105, 'header', J$.M(97, J$.R(49, 'contentRange', contentRange, 1), 'format', 0)(J$.T(89, {
                unit: J$.T(57, 'items', 21, false),
                first: J$.T(65, 10, 22, false),
                limit: J$.T(73, 20, 22, false),
                length: J$.T(81, 100, 22, false)
            }, 11, false)), header, 3));
            J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.R(129, 'header', header, 1)));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
