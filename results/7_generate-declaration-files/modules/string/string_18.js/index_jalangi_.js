J$.iids = {"9":[1,9,1,16],"17":[1,17,1,25],"25":[1,9,1,26],"33":[1,9,1,26],"41":[1,9,1,26],"49":[3,14,3,15],"57":[3,16,3,65],"65":[3,14,3,66],"73":[3,14,3,66],"81":[3,14,3,66],"89":[4,11,4,27],"97":[4,11,4,27],"105":[4,11,4,27],"113":[5,11,5,17],"121":[5,26,5,29],"129":[5,11,5,30],"131":[5,11,5,25],"137":[5,11,5,30],"145":[5,11,5,30],"153":[6,1,6,8],"161":[6,13,6,19],"169":[6,27,6,30],"177":[6,32,6,35],"185":[6,32,6,42],"193":[6,13,6,43],"195":[6,13,6,26],"201":[6,53,6,54],"209":[6,13,6,55],"211":[6,13,6,52],"217":[6,1,6,56],"219":[6,1,6,12],"225":[6,1,6,57],"233":[1,1,7,1],"241":[1,1,7,1],"249":[1,1,7,1],"257":[1,1,7,1],"265":[1,1,7,1],"273":[1,1,7,1],"281":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var S = require('string');\n\nvar phrase = S('JavaScript is the best scripting language ever!');\nvar sub = 'best scripting';\nvar pos = phrase.indexOf(sub);\nconsole.log(phrase.substr(pos, sub.length).truncate(8)); //best...\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(233, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(241, 'S', S, 0);
            J$.N(249, 'phrase', phrase, 0);
            J$.N(257, 'sub', sub, 0);
            J$.N(265, 'pos', pos, 0);
            var S = J$.X1(41, J$.W(33, 'S', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'string', 21, false)), S, 3));
            var phrase = J$.X1(81, J$.W(73, 'phrase', J$.F(65, J$.R(49, 'S', S, 1), 0)(J$.T(57, 'JavaScript is the best scripting language ever!', 21, false)), phrase, 3));
            var sub = J$.X1(105, J$.W(97, 'sub', J$.T(89, 'best scripting', 21, false), sub, 3));
            var pos = J$.X1(145, J$.W(137, 'pos', J$.M(129, J$.R(113, 'phrase', phrase, 1), 'indexOf', 0)(J$.R(121, 'sub', sub, 1)), pos, 3));
            J$.X1(225, J$.M(217, J$.R(153, 'console', console, 2), 'log', 0)(J$.M(209, J$.M(193, J$.R(161, 'phrase', phrase, 1), 'substr', 0)(J$.R(169, 'pos', pos, 1), J$.G(185, J$.R(177, 'sub', sub, 1), 'length', 0)), 'truncate', 0)(J$.T(201, 8, 22, false))));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
