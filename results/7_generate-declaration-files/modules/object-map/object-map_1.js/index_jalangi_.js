J$.iids = {"9":[1,17,1,24],"10":[9,10,9,23],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[4,8,4,9],"57":[5,8,5,9],"65":[3,14,6,2],"73":[3,14,6,2],"81":[3,14,6,2],"89":[8,14,8,23],"97":[8,24,8,30],"105":[9,10,9,15],"113":[9,18,9,23],"121":[9,10,9,23],"129":[9,3,9,24],"137":[8,32,10,2],"145":[8,32,10,2],"153":[8,32,10,2],"161":[8,32,10,2],"169":[8,14,10,3],"177":[8,14,10,3],"185":[8,14,10,3],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"225":[8,32,10,2],"233":[8,32,10,2],"241":[1,1,12,1],"249":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var objectMap = require('object-map');\n\nvar target = {\n  foo: 1,\n  bar: 2\n};\n\nvar result = objectMap(target, function(value) {\n  return value * value;\n});\n// => {foo: 1, bar: 4}\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'objectMap', objectMap, 0);
            J$.N(209, 'target', target, 0);
            J$.N(217, 'result', result, 0);
            var objectMap = J$.X1(41, J$.W(33, 'objectMap', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'object-map', 21, false)), objectMap, 3));
            var target = J$.X1(81, J$.W(73, 'target', J$.T(65, {
                foo: J$.T(49, 1, 22, false),
                bar: J$.T(57, 2, 22, false)
            }, 11, false), target, 3));
            var result = J$.X1(185, J$.W(177, 'result', J$.F(169, J$.R(89, 'objectMap', objectMap, 1), 0)(J$.R(97, 'target', target, 1), J$.T(161, function (value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            value = J$.N(153, 'value', value, 4);
                            return J$.X1(129, J$.Rt(121, J$.B(10, '*', J$.R(105, 'value', value, 0), J$.R(113, 'value', value, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 137)), result, 3));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
