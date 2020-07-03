J$.iids = {"9":[1,15,1,22],"17":[1,23,1,38],"25":[1,15,1,39],"33":[2,19,2,20],"41":[2,21,2,22],"49":[2,23,2,24],"57":[2,25,2,26],"65":[2,27,2,28],"73":[2,18,2,29],"81":[1,15,1,39],"89":[1,15,1,39],"97":[2,18,2,29],"105":[2,18,2,29],"113":[4,1,4,8],"121":[4,9,4,19],"129":[4,1,4,20],"137":[4,1,4,21],"145":[6,1,6,8],"153":[6,13,6,23],"161":[6,1,6,24],"163":[6,1,6,12],"169":[6,1,6,25],"177":[1,1,7,1],"185":[1,1,7,1],"193":[1,1,7,1],"201":[1,1,7,1],"209":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var shuffle = require('shuffle-array'),\n    collection = [1,2,3,4,5];\n\nshuffle(collection);\n\nconsole.log(collection); // returns [4, 3, 1, 5, 2]\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'shuffle', shuffle, 0);
            J$.N(193, 'collection', collection, 0);
            var shuffle = J$.X1(89, J$.W(81, 'shuffle', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'shuffle-array', 21, false)), shuffle, 3)), collection = J$.X1(105, J$.W(97, 'collection', J$.T(73, [
                    J$.T(33, 1, 22, false),
                    J$.T(41, 2, 22, false),
                    J$.T(49, 3, 22, false),
                    J$.T(57, 4, 22, false),
                    J$.T(65, 5, 22, false)
                ], 10, false), collection, 3));
            J$.X1(137, J$.F(129, J$.R(113, 'shuffle', shuffle, 1), 0)(J$.R(121, 'collection', collection, 1)));
            J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.R(153, 'collection', collection, 1)));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
