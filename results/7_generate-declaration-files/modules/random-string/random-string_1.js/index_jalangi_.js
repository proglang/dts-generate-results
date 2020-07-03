J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[2,9,2,21],"57":[2,9,2,23],"65":[2,9,2,23],"73":[2,9,2,23],"81":[4,5,4,17],"89":[5,10,5,11],"97":[6,11,6,15],"105":[7,11,7,15],"113":[8,11,8,16],"121":[9,12,9,15],"129":[9,17,9,20],"137":[9,22,9,25],"145":[9,11,9,26],"153":[4,18,10,2],"161":[4,5,10,3],"169":[4,5,10,3],"177":[4,1,10,4],"185":[1,1,10,4],"193":[1,1,10,4],"201":[1,1,10,4],"209":[1,1,10,4],"217":[1,1,10,4],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var randomString = require('random-string');\nvar x = randomString(); // x contains now a random String with the length of 8\n\nx = randomString({\n\tlength: 8,\n\tnumeric: true,\n\tletters: true,\n\tspecial: false,\n\texclude: ['a', 'b', '1']\n});"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'randomString', randomString, 0);
            J$.N(201, 'x', x, 0);
            var randomString = J$.X1(41, J$.W(33, 'randomString', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'random-string', 21, false)), randomString, 3));
            var x = J$.X1(73, J$.W(65, 'x', J$.F(57, J$.R(49, 'randomString', randomString, 1), 0)(), x, 3));
            J$.X1(177, x = J$.W(169, 'x', J$.F(161, J$.R(81, 'randomString', randomString, 1), 0)(J$.T(153, {
                length: J$.T(89, 8, 22, false),
                numeric: J$.T(97, true, 23, false),
                letters: J$.T(105, true, 23, false),
                special: J$.T(113, false, 23, false),
                exclude: J$.T(145, [
                    J$.T(121, 'a', 21, false),
                    J$.T(129, 'b', 21, false),
                    J$.T(137, '1', 21, false)
                ], 10, false)
            }, 11, false)), x, 2));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
