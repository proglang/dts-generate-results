J$.iids = {"9":[1,12,1,19],"17":[1,20,1,37],"25":[1,12,1,38],"33":[1,12,1,38],"41":[1,12,1,38],"49":[4,9,4,13],"57":[4,21,4,24],"65":[4,26,4,33],"73":[4,9,4,34],"75":[4,9,4,20],"81":[4,9,4,34],"89":[4,9,4,34],"97":[9,1,9,5],"105":[9,11,9,12],"113":[9,1,9,13],"115":[9,1,9,10],"121":[9,1,9,13],"129":[1,1,10,1],"137":[1,1,10,1],"145":[1,1,10,1],"153":[1,1,10,1],"161":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var pool = require(\"typedarray-pool\")\n\n//Allocate a buffer with at least 128 floats\nvar f = pool.malloc(128, \"float\")\n\n// ... do stuff ...\n\n//When done, release buffer\npool.free(f)\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'pool', pool, 0);
            J$.N(145, 'f', f, 0);
            var pool = J$.X1(41, J$.W(33, 'pool', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "typedarray-pool", 21, false)), pool, 3));
            var f = J$.X1(89, J$.W(81, 'f', J$.M(73, J$.R(49, 'pool', pool, 1), 'malloc', 0)(J$.T(57, 128, 22, false), J$.T(65, "float", 21, false)), f, 3));
            J$.X1(121, J$.M(113, J$.R(97, 'pool', pool, 1), 'free', 0)(J$.R(105, 'f', f, 1)));
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
