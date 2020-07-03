J$.iids = {"9":[1,16,1,23],"17":[1,24,1,40],"25":[1,16,1,41],"33":[1,16,1,41],"41":[1,16,1,41],"49":[3,1,3,8],"57":[3,13,3,21],"65":[3,22,3,25],"73":[3,27,3,30],"81":[3,32,3,53],"89":[3,13,3,54],"97":[3,1,3,55],"99":[3,1,3,12],"105":[3,1,3,56],"113":[4,1,4,8],"121":[4,13,4,21],"129":[4,22,4,25],"137":[4,27,4,30],"145":[4,32,4,63],"153":[4,13,4,64],"161":[4,1,4,65],"163":[4,1,4,12],"169":[4,1,4,66],"177":[5,1,5,8],"185":[5,13,5,21],"193":[5,22,5,32],"201":[5,34,5,44],"209":[5,46,5,75],"217":[5,13,5,76],"225":[5,1,5,77],"227":[5,1,5,12],"233":[5,1,5,78],"241":[6,1,6,8],"249":[6,13,6,21],"257":[6,28,6,31],"265":[6,33,6,36],"273":[6,38,6,59],"281":[6,13,6,60],"283":[6,13,6,27],"289":[6,1,6,61],"291":[6,1,6,12],"297":[6,1,6,62],"305":[1,1,7,1],"313":[1,1,7,1],"321":[1,1,7,1],"329":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var balanced = require('balanced-match');\n\nconsole.log(balanced('{', '}', 'pre{in{nested}}post'));\nconsole.log(balanced('{', '}', 'pre{first}between{second}post'));\nconsole.log(balanced(/\\s+\\{\\s+/, /\\s+\\}\\s+/, 'pre  {   in{nest}   }  post'));\nconsole.log(balanced.range('{', '}', 'pre{in{nested}}post'));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(305, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(313, 'balanced', balanced, 0);
            var balanced = J$.X1(41, J$.W(33, 'balanced', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'balanced-match', 21, false)), balanced, 3));
            J$.X1(105, J$.M(97, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(89, J$.R(57, 'balanced', balanced, 1), 0)(J$.T(65, '{', 21, false), J$.T(73, '}', 21, false), J$.T(81, 'pre{in{nested}}post', 21, false))));
            J$.X1(169, J$.M(161, J$.R(113, 'console', console, 2), 'log', 0)(J$.F(153, J$.R(121, 'balanced', balanced, 1), 0)(J$.T(129, '{', 21, false), J$.T(137, '}', 21, false), J$.T(145, 'pre{first}between{second}post', 21, false))));
            J$.X1(233, J$.M(225, J$.R(177, 'console', console, 2), 'log', 0)(J$.F(217, J$.R(185, 'balanced', balanced, 1), 0)(J$.T(193, /\s+\{\s+/, 14, false), J$.T(201, /\s+\}\s+/, 14, false), J$.T(209, 'pre  {   in{nest}   }  post', 21, false))));
            J$.X1(297, J$.M(289, J$.R(241, 'console', console, 2), 'log', 0)(J$.M(281, J$.R(249, 'balanced', balanced, 1), 'range', 0)(J$.T(257, '{', 21, false), J$.T(265, '}', 21, false), J$.T(273, 'pre{in{nested}}post', 21, false))));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
