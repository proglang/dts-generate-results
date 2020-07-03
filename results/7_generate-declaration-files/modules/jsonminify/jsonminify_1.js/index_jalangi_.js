J$.iids = {"9":[1,18,1,25],"10":[3,1,4,21],"17":[1,26,1,38],"18":[6,1,7,21],"25":[1,18,1,39],"33":[1,18,1,39],"41":[1,18,1,39],"49":[3,1,3,11],"57":[3,12,3,44],"65":[3,1,3,45],"73":[4,4,4,21],"81":[3,1,4,21],"89":[6,1,6,5],"97":[6,13,6,45],"105":[6,1,6,46],"107":[6,1,6,12],"113":[7,4,7,21],"121":[6,1,7,21],"129":[1,1,8,1],"137":[1,1,8,1],"145":[1,1,8,1],"153":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var jsonminify = require(\"jsonminify\");\n\njsonminify('{\"key\":\"value\"/** comment **/}')\n>> '{\"key\":\"value\"}'\n\nJSON.minify('{\"key\":\"value\"/** comment **/}')\n>> '{\"key\":\"value\"}'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'jsonminify', jsonminify, 0);
            var jsonminify = J$.X1(41, J$.W(33, 'jsonminify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "jsonminify", 21, false)), jsonminify, 3));
            J$.X1(81, J$.B(10, '>>', J$.F(65, J$.R(49, 'jsonminify', jsonminify, 1), 0)(J$.T(57, '{"key":"value"/** comment **/}', 21, false)), J$.T(73, '{"key":"value"}', 21, false), 0));
            J$.X1(121, J$.B(18, '>>', J$.M(105, J$.R(89, 'JSON', JSON, 2), 'minify', 0)(J$.T(97, '{"key":"value"/** comment **/}', 21, false)), J$.T(113, '{"key":"value"}', 21, false), 0));
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
