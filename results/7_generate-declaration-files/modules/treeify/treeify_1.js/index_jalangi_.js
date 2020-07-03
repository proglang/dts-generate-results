J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[2,1,2,8],"57":[3,4,3,11],"65":[4,15,4,21],"73":[5,16,5,26],"81":[3,19,6,5],"89":[6,7,6,11],"97":[3,4,6,12],"99":[3,4,3,18],"105":[2,1,7,2],"107":[2,1,2,12],"113":[2,1,7,3],"121":[1,1,8,1],"129":[1,1,8,1],"137":[1,1,8,1],"145":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var treeify = require('treeify');\nconsole.log(\n   treeify.asTree({\n      apples: 'gala',      //  ├─ apples: gala\n      oranges: 'mandarin'  //  └─ oranges: mandarin\n   }, true)\n);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'treeify', treeify, 0);
            var treeify = J$.X1(41, J$.W(33, 'treeify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'treeify', 21, false)), treeify, 3));
            J$.X1(113, J$.M(105, J$.R(49, 'console', console, 2), 'log', 0)(J$.M(97, J$.R(57, 'treeify', treeify, 1), 'asTree', 0)(J$.T(81, {
                apples: J$.T(65, 'gala', 21, false),
                oranges: J$.T(73, 'mandarin', 21, false)
            }, 11, false), J$.T(89, true, 23, false))));
        } catch (J$e) {
            J$.Ex(137, J$e);
        } finally {
            if (J$.Sr(145)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
