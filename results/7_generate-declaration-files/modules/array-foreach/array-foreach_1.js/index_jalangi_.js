J$.iids = {"9":[1,15,1,22],"10":[4,15,4,22],"17":[1,23,1,38],"25":[1,15,1,39],"33":[1,15,1,39],"41":[1,15,1,39],"49":[2,14,2,16],"57":[2,14,2,16],"65":[2,14,2,16],"73":[3,1,3,8],"81":[3,10,3,15],"89":[3,17,3,22],"97":[3,24,3,29],"105":[3,9,3,30],"113":[4,15,4,22],"121":[4,5,4,11],"129":[4,5,4,22],"137":[4,5,4,23],"145":[3,32,5,2],"153":[3,32,5,2],"161":[3,32,5,2],"169":[3,32,5,2],"177":[3,32,5,2],"185":[3,32,5,2],"193":[3,1,5,3],"201":[3,1,5,4],"209":[6,1,6,8],"217":[6,13,6,19],"225":[6,1,6,20],"227":[6,1,6,12],"233":[6,1,6,21],"241":[1,1,7,1],"249":[1,1,7,1],"257":[1,1,7,1],"265":[3,32,5,2],"273":[3,32,5,2],"281":[1,1,7,1],"289":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var forEach = require('array-foreach');\nvar result = '';\nforEach(['foo', 'bar', 'baz'], function (element, index, array) {\n    result += element;\n});\nconsole.log(result); // 'foobarbaz'\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(241, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(249, 'forEach', forEach, 0);
            J$.N(257, 'result', result, 0);
            var forEach = J$.X1(41, J$.W(33, 'forEach', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'array-foreach', 21, false)), forEach, 3));
            var result = J$.X1(65, J$.W(57, 'result', J$.T(49, '', 21, false), result, 3));
            J$.X1(201, J$.F(193, J$.R(73, 'forEach', forEach, 1), 0)(J$.T(105, [
                J$.T(81, 'foo', 21, false),
                J$.T(89, 'bar', 21, false),
                J$.T(97, 'baz', 21, false)
            ], 10, false), J$.T(185, function (element, index, array) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            element = J$.N(161, 'element', element, 4);
                            index = J$.N(169, 'index', index, 4);
                            array = J$.N(177, 'array', array, 4);
                            J$.X1(137, result = J$.W(129, 'result', J$.B(10, '+', J$.R(121, 'result', result, 1), J$.R(113, 'element', element, 0), 0), result, 2));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145)));
            J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.R(217, 'result', result, 1)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
