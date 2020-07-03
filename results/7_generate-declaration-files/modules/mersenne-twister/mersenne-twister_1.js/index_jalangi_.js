J$.iids = {"9":[1,23,1,30],"17":[1,31,1,49],"25":[1,23,1,50],"33":[1,23,1,50],"41":[1,23,1,50],"49":[2,21,2,36],"57":[2,17,2,38],"65":[2,17,2,38],"73":[2,17,2,38],"81":[5,1,5,10],"89":[5,1,5,19],"91":[5,1,5,17],"97":[5,1,5,20],"105":[8,1,8,10],"113":[8,1,8,23],"115":[8,1,8,21],"121":[8,1,8,24],"129":[11,1,11,10],"137":[11,1,11,24],"139":[11,1,11,22],"145":[11,1,11,25],"153":[14,1,14,10],"161":[14,1,14,24],"163":[14,1,14,22],"169":[14,1,14,25],"177":[17,1,17,10],"185":[17,1,17,24],"187":[17,1,17,22],"193":[17,1,17,25],"201":[20,1,20,10],"209":[20,1,20,25],"211":[20,1,20,23],"217":[20,1,20,26],"225":[1,1,21,1],"233":[1,1,21,1],"241":[1,1,21,1],"249":[1,1,21,1],"257":[1,1,21,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var MersenneTwister = require('mersenne-twister');\nvar generator = new MersenneTwister();\n\n// Generates a random number on [0,1) real interval (same interval as Math.random)\ngenerator.random();\n\n// [0, 4294967295]\ngenerator.random_int();\n\n// [0,1]\ngenerator.random_incl();\n\n// (0,1)\ngenerator.random_excl();\n\n// [0,1) with 53-bit resolution\ngenerator.random_long();\n\n// [0, 2147483647]\ngenerator.random_int31();\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'MersenneTwister', MersenneTwister, 0);
            J$.N(241, 'generator', generator, 0);
            var MersenneTwister = J$.X1(41, J$.W(33, 'MersenneTwister', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'mersenne-twister', 21, false)), MersenneTwister, 3));
            var generator = J$.X1(73, J$.W(65, 'generator', J$.F(57, J$.R(49, 'MersenneTwister', MersenneTwister, 1), 1)(), generator, 3));
            J$.X1(97, J$.M(89, J$.R(81, 'generator', generator, 1), 'random', 0)());
            J$.X1(121, J$.M(113, J$.R(105, 'generator', generator, 1), 'random_int', 0)());
            J$.X1(145, J$.M(137, J$.R(129, 'generator', generator, 1), 'random_incl', 0)());
            J$.X1(169, J$.M(161, J$.R(153, 'generator', generator, 1), 'random_excl', 0)());
            J$.X1(193, J$.M(185, J$.R(177, 'generator', generator, 1), 'random_long', 0)());
            J$.X1(217, J$.M(209, J$.R(201, 'generator', generator, 1), 'random_int31', 0)());
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
