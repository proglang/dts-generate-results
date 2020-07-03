J$.iids = {"9":[1,10,1,17],"17":[1,18,1,22],"25":[1,10,1,23],"33":[1,10,1,25],"41":[1,10,1,25],"49":[1,10,1,25],"57":[3,1,3,3],"65":[4,11,4,17],"73":[4,23,4,33],"81":[4,39,4,43],"89":[4,68,4,72],"97":[4,56,4,74],"105":[4,3,4,76],"113":[3,17,5,2],"121":[3,1,5,3],"123":[3,1,3,15],"129":[3,1,5,4],"137":[1,1,6,1],"145":[1,1,6,1],"153":[1,1,6,1],"161":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ui = require('f1')();\n\nui.transitions( [\n  { from: 'idle', to: 'rollOver', bi: true, animation: { duration: 0.25 } }\n]);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'ui', ui, 0);
            var ui = J$.X1(49, J$.W(41, 'ui', J$.F(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'f1', 21, false)), 0)(), ui, 3));
            J$.X1(129, J$.M(121, J$.R(57, 'ui', ui, 1), 'transitions', 0)(J$.T(113, [J$.T(105, {
                    from: J$.T(65, 'idle', 21, false),
                    to: J$.T(73, 'rollOver', 21, false),
                    bi: J$.T(81, true, 23, false),
                    animation: J$.T(97, {
                        duration: J$.T(89, 0.25, 22, false)
                    }, 11, false)
                }, 11, false)], 10, false)));
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
