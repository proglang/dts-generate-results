J$.iids = {"9":[1,14,1,21],"17":[1,22,1,43],"25":[1,14,1,44],"33":[1,45,1,49],"41":[1,14,1,50],"49":[1,14,1,50],"57":[1,14,1,50],"65":[2,1,2,7],"73":[2,12,2,16],"81":[2,1,2,17],"83":[2,1,2,11],"89":[2,1,2,17],"97":[4,15,4,22],"105":[4,23,4,44],"113":[4,15,4,45],"121":[4,46,4,50],"129":[4,15,4,51],"137":[4,15,4,51],"145":[4,15,4,51],"153":[5,1,5,8],"161":[5,13,5,17],"169":[5,1,5,18],"171":[5,1,5,12],"177":[5,1,5,18],"185":[7,16,7,23],"193":[7,24,7,45],"201":[7,16,7,46],"209":[7,47,7,51],"217":[7,16,7,52],"225":[7,16,7,52],"233":[7,16,7,52],"241":[8,1,8,9],"249":[8,14,8,18],"257":[8,1,8,19],"259":[8,1,8,13],"265":[8,1,8,19],"273":[1,1,9,1],"281":[1,1,9,1],"289":[1,1,9,1],"297":[1,1,9,1],"305":[1,1,9,1],"313":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var german = require('localized-countries')('de')\ngerman.get('CH') // returns 'Schweiz'\n\nvar english = require('localized-countries')('en')\nenglish.get('CH') // returns 'Switzerland'\n\nvar japanese = require('localized-countries')('ja')\njapanese.get('CH') // returns '\\u30b9\\u30a4\\u30b9'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(273, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(281, 'german', german, 0);
            J$.N(289, 'english', english, 0);
            J$.N(297, 'japanese', japanese, 0);
            var german = J$.X1(57, J$.W(49, 'german', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'localized-countries', 21, false)), 0)(J$.T(33, 'de', 21, false)), german, 3));
            J$.X1(89, J$.M(81, J$.R(65, 'german', german, 1), 'get', 0)(J$.T(73, 'CH', 21, false)));
            var english = J$.X1(145, J$.W(137, 'english', J$.F(129, J$.F(113, J$.R(97, 'require', require, 2), 0)(J$.T(105, 'localized-countries', 21, false)), 0)(J$.T(121, 'en', 21, false)), english, 3));
            J$.X1(177, J$.M(169, J$.R(153, 'english', english, 1), 'get', 0)(J$.T(161, 'CH', 21, false)));
            var japanese = J$.X1(233, J$.W(225, 'japanese', J$.F(217, J$.F(201, J$.R(185, 'require', require, 2), 0)(J$.T(193, 'localized-countries', 21, false)), 0)(J$.T(209, 'ja', 21, false)), japanese, 3));
            J$.X1(265, J$.M(257, J$.R(241, 'japanese', japanese, 1), 'get', 0)(J$.T(249, 'CH', 21, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
