J$.iids = {"9":[1,10,1,17],"17":[1,18,1,22],"25":[1,10,1,23],"33":[1,10,1,25],"41":[1,10,1,25],"49":[1,10,1,25],"57":[3,1,3,3],"65":[4,11,4,17],"73":[4,23,4,33],"81":[4,58,4,62],"89":[4,46,4,64],"97":[4,3,4,66],"105":[5,11,5,21],"113":[5,27,5,33],"121":[5,58,5,61],"129":[5,46,5,63],"137":[5,3,5,65],"145":[3,17,6,2],"153":[3,1,6,3],"155":[3,1,3,15],"161":[3,1,6,4],"169":[1,1,7,1],"177":[1,1,7,1],"185":[1,1,7,1],"193":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ui = require('f1')();\n\nui.transitions( [\n  { from: 'idle', to: 'rollOver', animation: { duration: 0.25 } },\n  { from: 'rollOver', to: 'idle', animation: { duration: 0.1 } }\n]);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'ui', ui, 0);
            var ui = J$.X1(49, J$.W(41, 'ui', J$.F(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'f1', 21, false)), 0)(), ui, 3));
            J$.X1(161, J$.M(153, J$.R(57, 'ui', ui, 1), 'transitions', 0)(J$.T(145, [
                J$.T(97, {
                    from: J$.T(65, 'idle', 21, false),
                    to: J$.T(73, 'rollOver', 21, false),
                    animation: J$.T(89, {
                        duration: J$.T(81, 0.25, 22, false)
                    }, 11, false)
                }, 11, false),
                J$.T(137, {
                    from: J$.T(105, 'rollOver', 21, false),
                    to: J$.T(113, 'idle', 21, false),
                    animation: J$.T(129, {
                        duration: J$.T(121, 0.1, 22, false)
                    }, 11, false)
                }, 11, false)
            ], 10, false)));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
