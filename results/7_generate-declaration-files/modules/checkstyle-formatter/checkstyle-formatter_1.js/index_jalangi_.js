J$.iids = {"9":[1,27,1,34],"17":[1,35,1,57],"25":[1,27,1,58],"33":[1,27,1,58],"41":[1,27,1,58],"49":[4,19,4,27],"57":[7,23,7,24],"65":[8,25,8,26],"73":[9,27,9,36],"81":[10,26,10,37],"89":[6,13,11,14],"97":[13,23,13,24],"105":[14,25,14,26],"113":[15,27,15,34],"121":[16,26,16,37],"129":[12,13,17,14],"137":[5,19,18,10],"145":[3,5,19,6],"153":[21,19,21,27],"161":[24,23,24,24],"169":[25,25,25,26],"177":[26,27,26,36],"185":[27,26,27,39],"193":[23,13,28,14],"201":[30,23,30,24],"209":[31,25,31,26],"217":[32,27,32,34],"225":[33,26,33,40],"233":[29,13,34,14],"241":[22,19,35,10],"249":[20,5,36,6],"257":[2,15,37,2],"265":[2,15,37,2],"273":[2,15,37,2],"281":[39,1,39,8],"289":[39,13,39,32],"297":[39,33,39,40],"305":[39,13,39,41],"313":[39,1,39,42],"315":[39,1,39,12],"321":[39,1,39,43],"329":[1,1,51,1],"337":[1,1,51,1],"345":[1,1,51,1],"353":[1,1,51,1],"361":[1,1,51,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var checkstyleFormatter = require('checkstyle-formatter');\nvar results = [\n    {\n        filename: 'foo.js',\n        messages: [\n            {\n                line: 1,\n                column: 2,\n                severity: 'warning',\n                message: 'the quick'\n            },\n            {\n                line: 3,\n                column: 4,\n                severity: 'error',\n                message: 'brown fox'\n            }\n        ]\n    },\n    {\n        filename: 'bar.js',\n        messages: [\n            {\n                line: 5,\n                column: 6,\n                severity: 'warning',\n                message: 'jumped over'\n            },\n            {\n                line: 7,\n                column: 8,\n                severity: 'error',\n                message: 'the lazy dog'\n            }\n        ]\n    }\n];\n\nconsole.log(checkstyleFormatter(results));\n// <?xml version=\"1.0\" encoding=\"utf-8\"?>\n// <checkstyle version=\"4.3\">\n// <file name=\"foo.js\">\n// <error line=\"1\" column=\"2\" severity=\"warning\" message=\"the quick\" />\n// <error line=\"3\" column=\"4\" severity=\"error\" message=\"brown fox\" />\n// </file>\n// <file name=\"bar.js\">\n// <error line=\"5\" column=\"6\" severity=\"warning\" message=\"jumped over\" />\n// <error line=\"7\" column=\"8\" severity=\"error\" message=\"the lazy dog\" />\n// </file>\n// </checkstyle>\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(337, 'checkstyleFormatter', checkstyleFormatter, 0);
            J$.N(345, 'results', results, 0);
            var checkstyleFormatter = J$.X1(41, J$.W(33, 'checkstyleFormatter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'checkstyle-formatter', 21, false)), checkstyleFormatter, 3));
            var results = J$.X1(273, J$.W(265, 'results', J$.T(257, [
                J$.T(145, {
                    filename: J$.T(49, 'foo.js', 21, false),
                    messages: J$.T(137, [
                        J$.T(89, {
                            line: J$.T(57, 1, 22, false),
                            column: J$.T(65, 2, 22, false),
                            severity: J$.T(73, 'warning', 21, false),
                            message: J$.T(81, 'the quick', 21, false)
                        }, 11, false),
                        J$.T(129, {
                            line: J$.T(97, 3, 22, false),
                            column: J$.T(105, 4, 22, false),
                            severity: J$.T(113, 'error', 21, false),
                            message: J$.T(121, 'brown fox', 21, false)
                        }, 11, false)
                    ], 10, false)
                }, 11, false),
                J$.T(249, {
                    filename: J$.T(153, 'bar.js', 21, false),
                    messages: J$.T(241, [
                        J$.T(193, {
                            line: J$.T(161, 5, 22, false),
                            column: J$.T(169, 6, 22, false),
                            severity: J$.T(177, 'warning', 21, false),
                            message: J$.T(185, 'jumped over', 21, false)
                        }, 11, false),
                        J$.T(233, {
                            line: J$.T(201, 7, 22, false),
                            column: J$.T(209, 8, 22, false),
                            severity: J$.T(217, 'error', 21, false),
                            message: J$.T(225, 'the lazy dog', 21, false)
                        }, 11, false)
                    ], 10, false)
                }, 11, false)
            ], 10, false), results, 3));
            J$.X1(321, J$.M(313, J$.R(281, 'console', console, 2), 'log', 0)(J$.F(305, J$.R(289, 'checkstyleFormatter', checkstyleFormatter, 1), 0)(J$.R(297, 'results', results, 1))));
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
