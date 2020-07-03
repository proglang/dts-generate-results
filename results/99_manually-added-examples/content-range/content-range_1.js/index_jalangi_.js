J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,14,3,26],"57":[4,9,4,16],"65":[3,34,5,2],"73":[3,14,5,3],"75":[3,14,3,33],"81":[3,14,5,3],"89":[3,14,5,3],"97":[7,1,7,8],"105":[7,13,7,19],"113":[7,1,7,20],"115":[7,1,7,12],"121":[7,1,7,21],"129":[9,1,9,13],"137":[10,9,10,16],"145":[11,10,11,12],"153":[12,10,12,12],"161":[13,11,13,14],"169":[14,9,14,11],"177":[9,21,15,2],"185":[9,1,15,3],"187":[9,1,9,20],"193":[9,1,15,4],"201":[17,1,17,13],"209":[18,9,18,16],"217":[19,10,19,12],"225":[20,10,20,12],"233":[21,11,21,14],"241":[17,21,22,2],"249":[17,1,22,3],"251":[17,1,17,20],"257":[17,1,22,4],"265":[24,1,24,13],"273":[24,20,24,31],"281":[24,1,24,32],"283":[24,1,24,19],"289":[24,1,24,33],"297":[25,1,25,13],"305":[25,20,25,37],"313":[25,1,25,38],"315":[25,1,25,19],"321":[25,1,25,39],"329":[1,1,25,39],"337":[1,1,25,39],"345":[1,1,25,39],"353":[1,1,25,39],"361":[1,1,25,39],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var contentRange = require('content-range');\n\nvar header = contentRange.format({\n  unit: 'items'\n});\n\nconsole.log(header); // items 10-29/100\n\ncontentRange.format({\n  unit: 'items',\n  first: 10,\n  limit: 20,\n  length: 100,\n  last: 12\n});\n\ncontentRange.format({\n  unit: 'items',\n  first: 10,\n  limit: 20,\n  length: 100\n});\n\ncontentRange.parse(\"something\");\ncontentRange.parse(\"items 10-29/100\");"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(337, 'contentRange', contentRange, 0);
            J$.N(345, 'header', header, 0);
            var contentRange = J$.X1(41, J$.W(33, 'contentRange', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'content-range', 21, false)), contentRange, 3));
            var header = J$.X1(89, J$.W(81, 'header', J$.M(73, J$.R(49, 'contentRange', contentRange, 1), 'format', 0)(J$.T(65, {
                unit: J$.T(57, 'items', 21, false)
            }, 11, false)), header, 3));
            J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.R(105, 'header', header, 1)));
            J$.X1(193, J$.M(185, J$.R(129, 'contentRange', contentRange, 1), 'format', 0)(J$.T(177, {
                unit: J$.T(137, 'items', 21, false),
                first: J$.T(145, 10, 22, false),
                limit: J$.T(153, 20, 22, false),
                length: J$.T(161, 100, 22, false),
                last: J$.T(169, 12, 22, false)
            }, 11, false)));
            J$.X1(257, J$.M(249, J$.R(201, 'contentRange', contentRange, 1), 'format', 0)(J$.T(241, {
                unit: J$.T(209, 'items', 21, false),
                first: J$.T(217, 10, 22, false),
                limit: J$.T(225, 20, 22, false),
                length: J$.T(233, 100, 22, false)
            }, 11, false)));
            J$.X1(289, J$.M(281, J$.R(265, 'contentRange', contentRange, 1), 'parse', 0)(J$.T(273, "something", 21, false)));
            J$.X1(321, J$.M(313, J$.R(297, 'contentRange', contentRange, 1), 'parse', 0)(J$.T(305, "items 10-29/100", 21, false)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
