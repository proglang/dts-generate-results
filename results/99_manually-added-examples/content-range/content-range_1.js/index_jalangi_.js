J$.iids = {"9":[1,20,1,27],"17":[1,28,1,43],"25":[1,20,1,44],"33":[1,20,1,44],"41":[1,20,1,44],"49":[3,14,3,26],"57":[4,9,4,16],"65":[5,10,5,12],"73":[6,10,6,12],"81":[7,11,7,14],"89":[3,34,8,2],"97":[3,14,8,3],"99":[3,14,3,33],"105":[3,14,8,3],"113":[3,14,8,3],"121":[10,1,10,8],"129":[10,13,10,19],"137":[10,1,10,20],"139":[10,1,10,12],"145":[10,1,10,21],"153":[13,10,13,22],"161":[14,9,14,16],"169":[15,10,15,12],"177":[16,10,16,12],"185":[17,11,17,14],"193":[18,9,18,11],"201":[13,30,19,2],"209":[13,10,19,3],"211":[13,10,13,29],"217":[13,10,19,3],"225":[13,1,19,4],"233":[21,10,21,22],"241":[22,9,22,16],"249":[21,30,23,2],"257":[21,10,23,3],"259":[21,10,21,29],"265":[21,10,23,3],"273":[21,1,23,4],"281":[25,1,25,13],"289":[25,20,25,37],"297":[25,1,25,38],"299":[25,1,25,19],"305":[25,1,25,39],"313":[1,1,25,39],"321":[1,1,25,39],"329":[1,1,25,39],"337":[1,1,25,39],"345":[1,1,25,39],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var contentRange = require('content-range');\n\nvar header = contentRange.format({\n  unit: 'items',\n  first: 10,\n  limit: 20,\n  length: 100\n});\n\nconsole.log(header); // items 10-29/100\n\n// Manually added:\nheader = contentRange.format({\n  unit: 'items',\n  first: 10,\n  limit: 20,\n  length: 100,\n  last: 12\n});\n\nheader = contentRange.format({\n  unit: 'items'\n});\n\ncontentRange.parse(\"items 10-29/100\");"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(313, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(321, 'contentRange', contentRange, 0);
            J$.N(329, 'header', header, 0);
            var contentRange = J$.X1(41, J$.W(33, 'contentRange', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'content-range', 21, false)), contentRange, 3));
            var header = J$.X1(113, J$.W(105, 'header', J$.M(97, J$.R(49, 'contentRange', contentRange, 1), 'format', 0)(J$.T(89, {
                unit: J$.T(57, 'items', 21, false),
                first: J$.T(65, 10, 22, false),
                limit: J$.T(73, 20, 22, false),
                length: J$.T(81, 100, 22, false)
            }, 11, false)), header, 3));
            J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.R(129, 'header', header, 1)));
            J$.X1(225, header = J$.W(217, 'header', J$.M(209, J$.R(153, 'contentRange', contentRange, 1), 'format', 0)(J$.T(201, {
                unit: J$.T(161, 'items', 21, false),
                first: J$.T(169, 10, 22, false),
                limit: J$.T(177, 20, 22, false),
                length: J$.T(185, 100, 22, false),
                last: J$.T(193, 12, 22, false)
            }, 11, false)), header, 2));
            J$.X1(273, header = J$.W(265, 'header', J$.M(257, J$.R(233, 'contentRange', contentRange, 1), 'format', 0)(J$.T(249, {
                unit: J$.T(241, 'items', 21, false)
            }, 11, false)), header, 2));
            J$.X1(305, J$.M(297, J$.R(281, 'contentRange', contentRange, 1), 'parse', 0)(J$.T(289, "items 10-29/100", 21, false)));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
