J$.iids = {"9":[1,14,1,21],"17":[1,22,1,46],"25":[1,14,1,47],"33":[1,14,1,47],"41":[1,14,1,47],"49":[3,16,3,22],"57":[3,29,3,36],"65":[3,38,3,45],"73":[3,47,3,51],"81":[3,28,3,52],"89":[3,54,3,94],"97":[3,16,3,95],"99":[3,16,3,27],"105":[3,16,3,95],"113":[3,16,3,95],"121":[5,1,5,8],"129":[5,13,5,21],"137":[5,1,5,22],"139":[5,1,5,12],"145":[5,1,5,23],"153":[1,1,6,1],"161":[1,1,6,1],"169":[1,1,6,1],"177":[1,1,6,1],"185":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parser = require('accept-language-parser');\n\nvar language = parser.pick(['fr-CA', 'fr-FR', 'fr'], 'en-GB,en-US;q=0.9,fr-CA;q=0.7,en;q=0.8');\n\nconsole.log(language);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'parser', parser, 0);
            J$.N(169, 'language', language, 0);
            var parser = J$.X1(41, J$.W(33, 'parser', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'accept-language-parser', 21, false)), parser, 3));
            var language = J$.X1(113, J$.W(105, 'language', J$.M(97, J$.R(49, 'parser', parser, 1), 'pick', 0)(J$.T(81, [
                J$.T(57, 'fr-CA', 21, false),
                J$.T(65, 'fr-FR', 21, false),
                J$.T(73, 'fr', 21, false)
            ], 10, false), J$.T(89, 'en-GB,en-US;q=0.9,fr-CA;q=0.7,en;q=0.8', 21, false)), language, 3));
            J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.R(129, 'language', language, 1)));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
