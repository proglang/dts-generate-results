J$.iids = {"9":[1,14,1,21],"17":[1,22,1,29],"25":[1,14,1,30],"33":[1,14,1,30],"41":[1,14,1,30],"49":[4,19,4,25],"57":[5,8,5,11],"65":[6,8,6,11],"73":[4,26,7,2],"81":[8,8,8,11],"89":[7,4,9,2],"97":[4,19,9,3],"105":[4,19,9,3],"113":[4,19,9,3],"121":[1,1,11,1],"129":[1,1,11,1],"137":[1,1,11,1],"145":[1,1,11,1],"153":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var extend = require(\"xtend\")\n\n// extend returns a new object. Does not mutate arguments\nvar combination = extend({\n    a: \"a\",\n    b: \"c\"\n}, {\n    b: \"b\"\n})\n// { a: \"a\", b: \"b\" }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'extend', extend, 0);
            J$.N(137, 'combination', combination, 0);
            var extend = J$.X1(41, J$.W(33, 'extend', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "xtend", 21, false)), extend, 3));
            var combination = J$.X1(113, J$.W(105, 'combination', J$.F(97, J$.R(49, 'extend', extend, 1), 0)(J$.T(73, {
                a: J$.T(57, "a", 21, false),
                b: J$.T(65, "c", 21, false)
            }, 11, false), J$.T(89, {
                b: J$.T(81, "b", 21, false)
            }, 11, false)), combination, 3));
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
