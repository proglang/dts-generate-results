J$.iids = {"9":[1,17,1,24],"17":[1,25,1,36],"25":[1,17,1,37],"33":[1,17,1,37],"41":[1,17,1,37],"49":[4,15,4,24],"57":[5,18,5,31],"65":[6,18,6,21],"73":[4,33,7,2],"81":[4,15,7,3],"83":[4,15,4,32],"89":[4,15,7,3],"97":[4,15,7,3],"105":[10,15,10,24],"113":[11,18,11,31],"121":[12,18,12,19],"129":[10,33,13,2],"137":[10,15,13,3],"139":[10,15,10,32],"145":[10,15,13,3],"153":[10,15,13,3],"161":[16,15,16,24],"169":[17,18,17,29],"177":[18,18,18,21],"185":[16,33,19,2],"193":[16,15,19,3],"195":[16,15,16,32],"201":[16,15,19,3],"209":[16,15,19,3],"217":[1,1,20,1],"225":[1,1,20,1],"233":[1,1,20,1],"241":[1,1,20,1],"249":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var oibackoff = require('oibackoff');\n\n// 0.4, 0.8, 1.6, 3.2, 6.4, ...\nvar backoff = oibackoff.backoff({\n    algorithm  : 'exponential',\n    delayRatio : 0.4,\n});\n\n// 1, 2, 3, 4, 5, ...\nvar backoff = oibackoff.backoff({\n    algorithm  : 'incremental',\n    delayRatio : 1,\n});\n\n// 0.5, 0.5, 1.0, 1.5, 2.5, 4, ...\nvar backoff = oibackoff.backoff({\n    algorithm  : 'fibonacci',\n    delayRatio : 0.5,\n});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(225, 'oibackoff', oibackoff, 0);
            J$.N(233, 'backoff', backoff, 0);
            var oibackoff = J$.X1(41, J$.W(33, 'oibackoff', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'oibackoff', 21, false)), oibackoff, 3));
            var backoff = J$.X1(97, J$.W(89, 'backoff', J$.M(81, J$.R(49, 'oibackoff', oibackoff, 1), 'backoff', 0)(J$.T(73, {
                algorithm: J$.T(57, 'exponential', 21, false),
                delayRatio: J$.T(65, 0.4, 22, false)
            }, 11, false)), backoff, 3));
            var backoff = J$.X1(153, J$.W(145, 'backoff', J$.M(137, J$.R(105, 'oibackoff', oibackoff, 1), 'backoff', 0)(J$.T(129, {
                algorithm: J$.T(113, 'incremental', 21, false),
                delayRatio: J$.T(121, 1, 22, false)
            }, 11, false)), backoff, 3));
            var backoff = J$.X1(209, J$.W(201, 'backoff', J$.M(193, J$.R(161, 'oibackoff', oibackoff, 1), 'backoff', 0)(J$.T(185, {
                algorithm: J$.T(169, 'fibonacci', 21, false),
                delayRatio: J$.T(177, 0.5, 22, false)
            }, 11, false)), backoff, 3));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
