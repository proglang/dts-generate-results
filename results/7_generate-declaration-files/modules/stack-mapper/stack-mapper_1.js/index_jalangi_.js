J$.iids = {"9":[1,19,1,26],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[6,13,6,38],"57":[7,9,7,10],"65":[8,11,8,13],"73":[5,17,9,2],"81":[10,13,10,38],"89":[11,9,11,10],"97":[12,11,12,13],"105":[9,4,13,2],"113":[14,13,14,38],"121":[15,9,15,11],"129":[16,11,16,13],"137":[13,4,17,2],"145":[18,13,18,38],"153":[19,9,19,11],"161":[20,11,20,13],"169":[17,4,21,2],"177":[22,13,22,76],"185":[23,9,23,11],"193":[24,11,24,13],"201":[21,4,25,2],"209":[5,16,25,3],"217":[5,16,25,3],"225":[5,16,25,3],"233":[27,22,27,23],"241":[28,9,28,23],"249":[30,6,30,76],"257":[31,6,31,74],"265":[30,4,31,76],"273":[32,10,32,12],"281":[33,13,33,126],"289":[35,6,35,143],"297":[36,6,36,183],"305":[35,4,36,185],"313":[27,11,36,187],"321":[27,11,36,187],"329":[27,11,36,187],"337":[38,10,38,21],"345":[38,22,38,25],"353":[38,10,38,26],"361":[38,10,38,26],"369":[38,10,38,26],"377":[39,14,39,16],"385":[39,21,39,29],"393":[39,14,39,30],"395":[39,14,39,20],"401":[39,14,39,30],"409":[39,14,39,30],"417":[41,1,41,8],"425":[41,13,41,19],"433":[41,1,41,20],"435":[41,1,41,12],"441":[41,1,41,21],"449":[1,1,42,1],"457":[1,1,42,1],"465":[1,1,42,1],"473":[1,1,42,1],"481":[1,1,42,1],"489":[1,1,42,1],"497":[1,1,42,1],"505":[1,1,42,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var stackMapper = require('stack-mapper');\n\n// it is up to you to create stack-mapper compatible frame objects\n// this will depend on your environment\nvar inframes = [{\n  filename: '/full/path/to/bundle.js',\n  line: 5,\n  column: 10\n}, {\n  filename: '/full/path/to/bundle.js',\n  line: 9,\n  column: 10\n}, {\n  filename: '/full/path/to/bundle.js',\n  line: 20,\n  column: 12\n}, {\n  filename: '/full/path/to/bundle.js',\n  line: 22,\n  column: 10,\n}, {\n  filename: '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles.js',\n  line: 18,\n  column: 21\n}];\n\nvar map = { version: 3,\n  file: 'generated.js',\n  sources:\n   [ '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/barbar.js',\n     '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/main.js' ],\n  names: [],\n  mappings: ';AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;ACTA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA',\n  sourcesContent:\n   [ '\\'use strict\\';\\n\\nfunction foobar() {\\n  return new Error();\\n}\\n\\nvar go = module.exports = function () {\\n  return foobar();  \\n};\\n',\n     '\\'use strict\\';\\n\\nvar barbar = require(\\'./barbar\\');\\n\\nmodule.exports = function main() {\\n  var a = 1;\\n  function bar() {\\n    return barbar();\\n  }\\n  return bar();\\n}\\n' ] }\n\nvar sm = stackMapper(map);\nvar frames = sm.map(inframes);\n\nconsole.log(frames);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(449, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(457, 'stackMapper', stackMapper, 0);
            J$.N(465, 'inframes', inframes, 0);
            J$.N(473, 'map', map, 0);
            J$.N(481, 'sm', sm, 0);
            J$.N(489, 'frames', frames, 0);
            var stackMapper = J$.X1(41, J$.W(33, 'stackMapper', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'stack-mapper', 21, false)), stackMapper, 3));
            var inframes = J$.X1(225, J$.W(217, 'inframes', J$.T(209, [
                J$.T(73, {
                    filename: J$.T(49, '/full/path/to/bundle.js', 21, false),
                    line: J$.T(57, 5, 22, false),
                    column: J$.T(65, 10, 22, false)
                }, 11, false),
                J$.T(105, {
                    filename: J$.T(81, '/full/path/to/bundle.js', 21, false),
                    line: J$.T(89, 9, 22, false),
                    column: J$.T(97, 10, 22, false)
                }, 11, false),
                J$.T(137, {
                    filename: J$.T(113, '/full/path/to/bundle.js', 21, false),
                    line: J$.T(121, 20, 22, false),
                    column: J$.T(129, 12, 22, false)
                }, 11, false),
                J$.T(169, {
                    filename: J$.T(145, '/full/path/to/bundle.js', 21, false),
                    line: J$.T(153, 22, 22, false),
                    column: J$.T(161, 10, 22, false)
                }, 11, false),
                J$.T(201, {
                    filename: J$.T(177, '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles.js', 21, false),
                    line: J$.T(185, 18, 22, false),
                    column: J$.T(193, 21, 22, false)
                }, 11, false)
            ], 10, false), inframes, 3));
            var map = J$.X1(329, J$.W(321, 'map', J$.T(313, {
                version: J$.T(233, 3, 22, false),
                file: J$.T(241, 'generated.js', 21, false),
                sources: J$.T(265, [
                    J$.T(249, '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/barbar.js', 21, false),
                    J$.T(257, '/Users/thlorenz/dev/js/projects/stack-mapper/test/twofiles/main.js', 21, false)
                ], 10, false),
                names: J$.T(273, [], 10, false),
                mappings: J$.T(281, ';AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;ACTA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA', 21, false),
                sourcesContent: J$.T(305, [
                    J$.T(289, '\'use strict\';\n\nfunction foobar() {\n  return new Error();\n}\n\nvar go = module.exports = function () {\n  return foobar();  \n};\n', 21, false),
                    J$.T(297, '\'use strict\';\n\nvar barbar = require(\'./barbar\');\n\nmodule.exports = function main() {\n  var a = 1;\n  function bar() {\n    return barbar();\n  }\n  return bar();\n}\n', 21, false)
                ], 10, false)
            }, 11, false), map, 3));
            var sm = J$.X1(369, J$.W(361, 'sm', J$.F(353, J$.R(337, 'stackMapper', stackMapper, 1), 0)(J$.R(345, 'map', map, 1)), sm, 3));
            var frames = J$.X1(409, J$.W(401, 'frames', J$.M(393, J$.R(377, 'sm', sm, 1), 'map', 0)(J$.R(385, 'inframes', inframes, 1)), frames, 3));
            J$.X1(441, J$.M(433, J$.R(417, 'console', console, 2), 'log', 0)(J$.R(425, 'frames', frames, 1)));
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
