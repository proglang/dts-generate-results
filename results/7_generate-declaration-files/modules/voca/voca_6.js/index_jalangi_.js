J$.iids = {"9":[1,9,1,16],"17":[1,17,1,23],"25":[1,9,1,24],"33":[1,9,1,24],"41":[1,9,1,24],"49":[2,1,2,2],"57":[2,8,2,24],"65":[2,1,2,25],"67":[2,1,2,7],"73":[2,1,2,26],"81":[3,1,3,2],"89":[3,11,3,22],"97":[3,24,3,25],"105":[3,27,3,35],"113":[3,1,3,36],"115":[3,1,3,10],"121":[3,1,3,37],"129":[1,1,4,1],"137":[1,1,4,1],"145":[1,1,4,1],"153":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var v = require('voca');\nv.trim(' Hello World! ');            // => 'Hello World'\nv.sprintf('%d red %s', 3, 'apples'); // => '3 red apples'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(137, 'v', v, 0);
            var v = J$.X1(41, J$.W(33, 'v', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'voca', 21, false)), v, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'v', v, 1), 'trim', 0)(J$.T(57, ' Hello World! ', 21, false)));
            J$.X1(121, J$.M(113, J$.R(81, 'v', v, 1), 'sprintf', 0)(J$.T(89, '%d red %s', 21, false), J$.T(97, 3, 22, false), J$.T(105, 'apples', 21, false)));
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
