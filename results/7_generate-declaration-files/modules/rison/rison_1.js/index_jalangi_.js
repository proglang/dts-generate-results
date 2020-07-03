J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,29],"41":[1,13,1,29],"49":[3,1,3,6],"57":[3,20,3,26],"65":[3,33,3,37],"73":[3,14,3,38],"81":[3,1,3,39],"83":[3,1,3,13],"89":[3,1,3,40],"97":[4,1,4,6],"105":[4,21,4,24],"113":[4,26,4,29],"121":[4,49,4,53],"129":[4,31,4,54],"137":[4,20,4,55],"145":[4,1,4,56],"147":[4,1,4,19],"153":[4,1,4,57],"161":[5,1,5,6],"169":[5,39,5,43],"177":[5,51,5,54],"185":[5,21,5,55],"193":[5,1,5,56],"195":[5,1,5,20],"201":[5,1,5,57],"209":[8,1,8,6],"217":[8,20,8,26],"225":[8,33,8,37],"233":[8,14,8,38],"241":[8,1,8,39],"243":[8,1,8,13],"249":[8,1,8,40],"257":[12,1,12,6],"265":[12,39,12,43],"273":[12,51,12,54],"281":[12,21,12,55],"289":[12,1,12,56],"291":[12,1,12,20],"297":[12,1,12,57],"305":[16,1,16,6],"313":[16,21,16,24],"321":[16,26,16,29],"329":[16,49,16,53],"337":[16,31,16,54],"345":[16,20,16,55],"353":[16,1,16,56],"355":[16,1,16,19],"361":[16,1,16,57],"369":[21,1,21,6],"377":[21,14,21,33],"385":[21,1,21,34],"387":[21,1,21,13],"393":[21,1,21,35],"401":[1,1,23,1],"409":[1,1,23,1],"417":[1,1,23,1],"425":[1,1,23,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rison = require('rison');\n\nrison.encode({any: \"json\", yes: true});\nrison.encode_array([\"A\", \"B\", {supportsObjects: true}]);\nrison.encode_object({supportsObjects: true, ints: 435});\n\n// Rison\nrison.encode({any: \"json\", yes: true});\n// (any:json,yes:!t)\n\n// O-Rison\nrison.encode_object({supportsObjects: true, ints: 435});\n// ints:435,supportsObjects:!t\n\n// A-Rison\nrison.encode_array([\"A\", \"B\", {supportsObjects: true}]);\n// A,B,(supportsObjects:!t)\n\n// Decode with: rison.decode, rison.decode_object, rison.decode_array\n// Example:\nrison.encode('(any:json,yes:!t)');\n// { any: 'json', yes: true }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(409, 'rison', rison, 0);
            var rison = J$.X1(41, J$.W(33, 'rison', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'rison', 21, false)), rison, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'rison', rison, 1), 'encode', 0)(J$.T(73, {
                any: J$.T(57, "json", 21, false),
                yes: J$.T(65, true, 23, false)
            }, 11, false)));
            J$.X1(153, J$.M(145, J$.R(97, 'rison', rison, 1), 'encode_array', 0)(J$.T(137, [
                J$.T(105, "A", 21, false),
                J$.T(113, "B", 21, false),
                J$.T(129, {
                    supportsObjects: J$.T(121, true, 23, false)
                }, 11, false)
            ], 10, false)));
            J$.X1(201, J$.M(193, J$.R(161, 'rison', rison, 1), 'encode_object', 0)(J$.T(185, {
                supportsObjects: J$.T(169, true, 23, false),
                ints: J$.T(177, 435, 22, false)
            }, 11, false)));
            J$.X1(249, J$.M(241, J$.R(209, 'rison', rison, 1), 'encode', 0)(J$.T(233, {
                any: J$.T(217, "json", 21, false),
                yes: J$.T(225, true, 23, false)
            }, 11, false)));
            J$.X1(297, J$.M(289, J$.R(257, 'rison', rison, 1), 'encode_object', 0)(J$.T(281, {
                supportsObjects: J$.T(265, true, 23, false),
                ints: J$.T(273, 435, 22, false)
            }, 11, false)));
            J$.X1(361, J$.M(353, J$.R(305, 'rison', rison, 1), 'encode_array', 0)(J$.T(345, [
                J$.T(313, "A", 21, false),
                J$.T(321, "B", 21, false),
                J$.T(337, {
                    supportsObjects: J$.T(329, true, 23, false)
                }, 11, false)
            ], 10, false)));
            J$.X1(393, J$.M(385, J$.R(369, 'rison', rison, 1), 'encode', 0)(J$.T(377, '(any:json,yes:!t)', 21, false)));
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
