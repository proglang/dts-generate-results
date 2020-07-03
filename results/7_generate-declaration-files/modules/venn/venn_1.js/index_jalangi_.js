J$.iids = {"9":[2,14,2,21],"17":[2,22,2,28],"25":[2,14,2,29],"33":[2,14,2,29],"41":[2,14,2,29],"49":[3,3,3,7],"57":[3,16,3,17],"65":[3,18,3,19],"73":[3,15,3,20],"81":[3,3,3,21],"83":[3,3,3,14],"89":[3,3,3,21],"97":[4,3,4,10],"105":[4,15,4,19],"113":[4,3,4,20],"115":[4,3,4,14],"121":[4,3,4,20],"129":[1,1,6,1],"137":[1,1,6,1],"145":[1,1,6,1],"153":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"\n  var venn = require(\"venn\")\n  venn.create([1,2])   \n  console.log(venn) // [1,2]\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'venn', venn, 0);
            var venn = J$.X1(41, J$.W(33, 'venn', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "venn", 21, false)), venn, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'venn', venn, 1), 'create', 0)(J$.T(73, [
                J$.T(57, 1, 22, false),
                J$.T(65, 2, 22, false)
            ], 10, false)));
            J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.R(105, 'venn', venn, 1)));
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
