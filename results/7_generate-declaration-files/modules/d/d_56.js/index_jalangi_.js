J$.iids = {"9":[1,9,1,16],"17":[1,17,1,20],"25":[1,9,1,21],"33":[1,9,1,21],"41":[1,9,1,21],"49":[2,12,2,19],"57":[2,20,2,28],"65":[2,12,2,29],"73":[2,12,2,29],"81":[2,12,2,29],"89":[4,11,4,25],"97":[4,11,4,25],"105":[4,11,4,25],"113":[4,11,4,25],"121":[4,11,4,25],"129":[5,1,5,7],"137":[5,25,5,28],"145":[5,25,5,38],"153":[5,40,5,44],"161":[6,10,6,11],"169":[6,33,6,35],"177":[6,33,6,35],"185":[6,26,6,36],"193":[6,12,6,38],"201":[6,12,6,38],"209":[6,12,6,38],"217":[6,10,6,39],"225":[5,45,7,2],"233":[5,40,7,3],"241":[5,1,7,4],"243":[5,1,5,24],"249":[5,1,7,5],"257":[9,15,9,18],"265":[9,11,9,20],"273":[9,11,9,20],"281":[9,11,9,20],"289":[10,1,10,4],"297":[10,1,10,10],"305":[10,16,10,17],"313":[10,19,10,20],"321":[10,1,10,21],"323":[10,1,10,15],"329":[10,1,10,22],"337":[1,1,11,1],"345":[1,1,11,1],"353":[1,1,11,1],"361":[1,1,11,1],"369":[1,1,11,1],"377":[4,11,4,25],"385":[4,11,4,25],"393":[6,12,6,38],"401":[6,12,6,38],"409":[1,1,11,1],"417":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var d = require('d');\nvar lazy = require('d/lazy');\n\nvar Foo = function () {};\nObject.defineProperties(Foo.prototype, lazy({\n  items: d(function () { return []; })\n}));\n\nvar foo = new Foo();\nfoo.items.push(1, 2); // foo.items array created and defined directly on foo\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(337, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(345, 'd', d, 0);
            J$.N(353, 'lazy', lazy, 0);
            J$.N(361, 'Foo', Foo, 0);
            J$.N(369, 'foo', foo, 0);
            var d = J$.X1(41, J$.W(33, 'd', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'd', 21, false)), d, 3));
            var lazy = J$.X1(81, J$.W(73, 'lazy', J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'd/lazy', 21, false)), lazy, 3));
            var Foo = J$.X1(121, J$.W(113, 'Foo', J$.T(105, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 89), Foo, 3));
            J$.X1(249, J$.M(241, J$.R(129, 'Object', Object, 2), 'defineProperties', 0)(J$.G(145, J$.R(137, 'Foo', Foo, 1), 'prototype', 0), J$.F(233, J$.R(153, 'lazy', lazy, 1), 0)(J$.T(225, {
                items: J$.F(217, J$.R(161, 'd', d, 1), 0)(J$.T(209, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(193, arguments.callee, this, arguments);
                                arguments = J$.N(201, 'arguments', arguments, 4);
                                return J$.X1(185, J$.Rt(177, J$.T(169, [], 10, false)));
                            } catch (J$e) {
                                J$.Ex(393, J$e);
                            } finally {
                                if (J$.Fr(401))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 193))
            }, 11, false))));
            var foo = J$.X1(281, J$.W(273, 'foo', J$.F(265, J$.R(257, 'Foo', Foo, 1), 1)(), foo, 3));
            J$.X1(329, J$.M(321, J$.G(297, J$.R(289, 'foo', foo, 1), 'items', 0), 'push', 0)(J$.T(305, 1, 22, false), J$.T(313, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
