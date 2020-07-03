J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,13,3,20],"57":[3,13,3,29],"59":[3,13,3,27],"65":[3,13,3,29],"73":[3,13,3,29],"81":[5,11,5,18],"89":[5,26,5,31],"97":[5,11,5,32],"99":[5,11,5,25],"105":[5,11,5,32],"113":[5,11,5,32],"121":[7,13,7,25],"129":[7,26,7,29],"137":[7,13,7,30],"145":[7,13,7,30],"153":[7,13,7,30],"161":[8,1,8,8],"169":[8,13,8,18],"177":[8,1,8,19],"179":[8,1,8,12],"185":[8,1,8,20],"193":[10,9,10,21],"201":[10,22,10,25],"209":[10,36,10,40],"217":[10,27,10,41],"225":[10,9,10,42],"233":[10,9,10,42],"241":[10,1,10,43],"249":[11,1,11,8],"257":[11,13,11,18],"265":[11,1,11,19],"267":[11,1,11,12],"273":[11,1,11,20],"281":[13,9,13,21],"289":[13,22,13,25],"297":[13,36,13,40],"305":[13,27,13,41],"313":[13,9,13,42],"321":[13,9,13,42],"329":[13,1,13,43],"337":[14,1,14,8],"345":[14,13,14,18],"353":[14,1,14,19],"355":[14,1,14,12],"361":[14,1,14,20],"369":[1,1,15,1],"377":[1,1,15,1],"385":[1,1,15,1],"393":[1,1,15,1],"401":[1,1,15,1],"409":[1,1,15,1],"417":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var prettyHrtime = require('pretty-hrtime');\n\nvar start = process.hrtime();\n// do stuff\nvar end = process.hrtime(start);\n\nvar words = prettyHrtime(end);\nconsole.log(words); // '1.2 ms'\n\nwords = prettyHrtime(end, {verbose:true});\nconsole.log(words); // '1 millisecond 209 microseconds'\n\nwords = prettyHrtime(end, {precise:true});\nconsole.log(words); // '1.20958 ms'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(377, 'prettyHrtime', prettyHrtime, 0);
            J$.N(385, 'start', start, 0);
            J$.N(393, 'end', end, 0);
            J$.N(401, 'words', words, 0);
            var prettyHrtime = J$.X1(41, J$.W(33, 'prettyHrtime', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'pretty-hrtime', 21, false)), prettyHrtime, 3));
            var start = J$.X1(73, J$.W(65, 'start', J$.M(57, J$.R(49, 'process', process, 2), 'hrtime', 0)(), start, 3));
            var end = J$.X1(113, J$.W(105, 'end', J$.M(97, J$.R(81, 'process', process, 2), 'hrtime', 0)(J$.R(89, 'start', start, 1)), end, 3));
            var words = J$.X1(153, J$.W(145, 'words', J$.F(137, J$.R(121, 'prettyHrtime', prettyHrtime, 1), 0)(J$.R(129, 'end', end, 1)), words, 3));
            J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.R(169, 'words', words, 1)));
            J$.X1(241, words = J$.W(233, 'words', J$.F(225, J$.R(193, 'prettyHrtime', prettyHrtime, 1), 0)(J$.R(201, 'end', end, 1), J$.T(217, {
                verbose: J$.T(209, true, 23, false)
            }, 11, false)), words, 2));
            J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.R(257, 'words', words, 1)));
            J$.X1(329, words = J$.W(321, 'words', J$.F(313, J$.R(281, 'prettyHrtime', prettyHrtime, 1), 0)(J$.R(289, 'end', end, 1), J$.T(305, {
                precise: J$.T(297, true, 23, false)
            }, 11, false)), words, 2));
            J$.X1(361, J$.M(353, J$.R(337, 'console', console, 2), 'log', 0)(J$.R(345, 'words', words, 1)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
