J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[3,1,3,10],"57":[3,18,3,21],"65":[3,12,3,22],"73":[3,30,3,33],"81":[3,24,3,34],"89":[3,42,3,45],"97":[3,36,3,46],"105":[3,11,3,47],"113":[3,49,3,54],"121":[3,1,3,55],"129":[3,1,3,56],"137":[1,1,5,1],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var arraySort = require('array-sort');\n\narraySort([{foo: 'y'}, {foo: 'z'}, {foo: 'x'}], 'foo');\n//=> [{foo: 'x'}, {foo: 'y'}, {foo: 'z'}]\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'arraySort', arraySort, 0);
            var arraySort = J$.X1(41, J$.W(33, 'arraySort', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'array-sort', 21, false)), arraySort, 3));
            J$.X1(129, J$.F(121, J$.R(49, 'arraySort', arraySort, 1), 0)(J$.T(105, [
                J$.T(65, {
                    foo: J$.T(57, 'y', 21, false)
                }, 11, false),
                J$.T(81, {
                    foo: J$.T(73, 'z', 21, false)
                }, 11, false),
                J$.T(97, {
                    foo: J$.T(89, 'x', 21, false)
                }, 11, false)
            ], 10, false), J$.T(113, 'foo', 21, false)));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
