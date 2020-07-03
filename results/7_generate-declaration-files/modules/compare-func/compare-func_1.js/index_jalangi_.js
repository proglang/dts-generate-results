J$.iids = {"9":[1,19,1,26],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[4,6,4,9],"57":[4,2,4,10],"65":[4,16,4,19],"73":[4,12,4,20],"81":[4,26,4,29],"89":[4,22,4,30],"97":[4,1,4,31],"105":[4,37,4,48],"113":[4,49,4,52],"121":[4,37,4,53],"129":[4,1,4,54],"131":[4,1,4,36],"137":[4,1,4,55],"145":[8,10,8,13],"153":[8,6,8,14],"161":[8,2,8,15],"169":[8,25,8,28],"177":[8,21,8,29],"185":[8,17,8,30],"193":[8,1,8,31],"201":[8,37,8,48],"209":[8,49,8,54],"217":[8,37,8,55],"225":[8,1,8,56],"227":[8,1,8,36],"233":[8,1,8,57],"241":[12,6,12,9],"249":[12,14,12,17],"257":[12,2,12,18],"265":[12,24,12,27],"273":[12,32,12,35],"281":[12,20,12,36],"289":[12,42,12,45],"297":[12,50,12,53],"305":[12,38,12,54],"313":[12,1,12,55],"321":[12,61,12,72],"329":[12,74,12,77],"337":[12,79,12,82],"345":[12,73,12,83],"353":[12,61,12,84],"361":[12,1,12,85],"363":[12,1,12,60],"369":[12,1,12,86],"377":[16,6,16,9],"385":[16,2,16,10],"393":[16,16,16,19],"401":[16,12,16,20],"409":[16,26,16,29],"417":[16,22,16,30],"425":[16,1,16,31],"433":[16,37,16,48],"441":[17,10,17,12],"449":[17,10,17,14],"457":[17,10,17,14],"465":[17,3,17,15],"473":[16,49,18,2],"481":[16,49,18,2],"489":[16,49,18,2],"497":[16,49,18,2],"505":[16,37,18,3],"513":[16,1,18,4],"515":[16,1,16,36],"521":[16,1,18,5],"529":[1,1,20,1],"537":[1,1,20,1],"545":[16,49,18,2],"553":[16,49,18,2],"561":[1,1,20,1],"569":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var compareFunc = require('compare-func');\n\n// sort by an object property\n[{x: 'b'}, {x: 'a'}, {x: 'c'}].sort(compareFunc('x'));\n//=> [{x: 'a'}, {x: 'b'}, {x: 'c'}]\n\n// sort by a nested object property\n[{x: {y: 'b'}}, {x: {y: 'a'}}].sort(compareFunc('x.y'));\n//=> [{x: {y: 'a'}}, {x: {y: 'b'}}]\n\n// sort by the `x` propery, then `y`\n[{x: 'c', y: 'c'}, {x: 'b', y: 'a'}, {x: 'b', y: 'b'}].sort(compareFunc(['x', 'y']));\n//=> [{x: 'b', y: 'a'}, {x: 'b', y: 'b'}, {x: 'c', y: 'c'}]\n\n// sort by the returned value\n[{x: 'b'}, {x: 'a'}, {x: 'c'}].sort(compareFunc(function(el) {\n  return el.x;\n}));\n//=> [{x: 'a'}, {x: 'b'}, {x: 'c'}]\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(529, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(537, 'compareFunc', compareFunc, 0);
            var compareFunc = J$.X1(41, J$.W(33, 'compareFunc', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'compare-func', 21, false)), compareFunc, 3));
            J$.X1(137, J$.M(129, J$.T(97, [
                J$.T(57, {
                    x: J$.T(49, 'b', 21, false)
                }, 11, false),
                J$.T(73, {
                    x: J$.T(65, 'a', 21, false)
                }, 11, false),
                J$.T(89, {
                    x: J$.T(81, 'c', 21, false)
                }, 11, false)
            ], 10, false), 'sort', 0)(J$.F(121, J$.R(105, 'compareFunc', compareFunc, 1), 0)(J$.T(113, 'x', 21, false))));
            J$.X1(233, J$.M(225, J$.T(193, [
                J$.T(161, {
                    x: J$.T(153, {
                        y: J$.T(145, 'b', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(185, {
                    x: J$.T(177, {
                        y: J$.T(169, 'a', 21, false)
                    }, 11, false)
                }, 11, false)
            ], 10, false), 'sort', 0)(J$.F(217, J$.R(201, 'compareFunc', compareFunc, 1), 0)(J$.T(209, 'x.y', 21, false))));
            J$.X1(369, J$.M(361, J$.T(313, [
                J$.T(257, {
                    x: J$.T(241, 'c', 21, false),
                    y: J$.T(249, 'c', 21, false)
                }, 11, false),
                J$.T(281, {
                    x: J$.T(265, 'b', 21, false),
                    y: J$.T(273, 'a', 21, false)
                }, 11, false),
                J$.T(305, {
                    x: J$.T(289, 'b', 21, false),
                    y: J$.T(297, 'b', 21, false)
                }, 11, false)
            ], 10, false), 'sort', 0)(J$.F(353, J$.R(321, 'compareFunc', compareFunc, 1), 0)(J$.T(345, [
                J$.T(329, 'x', 21, false),
                J$.T(337, 'y', 21, false)
            ], 10, false))));
            J$.X1(521, J$.M(513, J$.T(425, [
                J$.T(385, {
                    x: J$.T(377, 'b', 21, false)
                }, 11, false),
                J$.T(401, {
                    x: J$.T(393, 'a', 21, false)
                }, 11, false),
                J$.T(417, {
                    x: J$.T(409, 'c', 21, false)
                }, 11, false)
            ], 10, false), 'sort', 0)(J$.F(505, J$.R(433, 'compareFunc', compareFunc, 1), 0)(J$.T(497, function (el) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(473, arguments.callee, this, arguments);
                            arguments = J$.N(481, 'arguments', arguments, 4);
                            el = J$.N(489, 'el', el, 4);
                            return J$.X1(465, J$.Rt(457, J$.G(449, J$.R(441, 'el', el, 0), 'x', 0)));
                        } catch (J$e) {
                            J$.Ex(545, J$e);
                        } finally {
                            if (J$.Fr(553))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 473))));
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
