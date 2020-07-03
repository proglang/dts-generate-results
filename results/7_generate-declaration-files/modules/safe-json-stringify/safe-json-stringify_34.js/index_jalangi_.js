J$.iids = {"9":[1,25,1,32],"17":[1,33,1,54],"25":[1,25,1,55],"33":[1,25,1,55],"41":[1,25,1,55],"49":[3,11,3,13],"57":[3,11,3,13],"65":[3,11,3,13],"73":[4,1,4,7],"81":[4,23,4,26],"89":[4,28,4,33],"97":[5,33,5,38],"105":[5,39,5,46],"113":[5,29,5,47],"121":[5,29,5,47],"129":[5,23,5,48],"137":[5,10,5,50],"145":[5,10,5,50],"153":[5,10,5,50],"161":[6,21,6,25],"169":[4,35,7,2],"177":[4,1,7,3],"179":[4,1,4,22],"185":[4,1,7,4],"193":[9,1,9,18],"201":[9,19,9,22],"209":[9,1,9,23],"217":[9,1,9,24],"225":[1,1,10,1],"233":[1,1,10,1],"241":[1,1,10,1],"249":[5,10,5,50],"257":[5,10,5,50],"265":[1,1,10,1],"273":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var safeJsonStringify = require('safe-json-stringify');\n// Never ever do this in your code. Please.\nvar obj = {};\nObject.defineProperty(obj, 'foo', {\n    get: function() { throw new Error('ouch!'); },\n        enumerable: true\n});\n\nsafeJsonStringify(obj); // '{\"foo\":\"[Throws]\"}'\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'safeJsonStringify', safeJsonStringify, 0);
            J$.N(241, 'obj', obj, 0);
            var safeJsonStringify = J$.X1(41, J$.W(33, 'safeJsonStringify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'safe-json-stringify', 21, false)), safeJsonStringify, 3));
            var obj = J$.X1(65, J$.W(57, 'obj', J$.T(49, {}, 11, false), obj, 3));
            J$.X1(185, J$.M(177, J$.R(73, 'Object', Object, 2), 'defineProperty', 0)(J$.R(81, 'obj', obj, 1), J$.T(89, 'foo', 21, false), J$.T(169, {
                get: J$.T(153, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(137, arguments.callee, this, arguments);
                                arguments = J$.N(145, 'arguments', arguments, 4);
                                throw J$.X1(129, J$.Th(121, J$.F(113, J$.R(97, 'Error', Error, 2), 1)(J$.T(105, 'ouch!', 21, false))));
                            } catch (J$e) {
                                J$.Ex(249, J$e);
                            } finally {
                                if (J$.Fr(257))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 137),
                enumerable: J$.T(161, true, 23, false)
            }, 11, false)));
            J$.X1(217, J$.F(209, J$.R(193, 'safeJsonStringify', safeJsonStringify, 1), 0)(J$.R(201, 'obj', obj, 1)));
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
