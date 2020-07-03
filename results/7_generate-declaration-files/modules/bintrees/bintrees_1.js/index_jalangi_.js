J$.iids = {"9":[1,14,1,21],"10":[3,47,3,52],"17":[1,22,1,32],"18":[6,13,6,15],"25":[1,14,1,33],"33":[1,14,1,40],"41":[1,14,1,40],"49":[1,14,1,40],"57":[3,16,3,22],"65":[3,47,3,48],"73":[3,51,3,52],"81":[3,47,3,52],"89":[3,40,3,53],"97":[3,23,3,55],"105":[3,23,3,55],"113":[3,23,3,55],"121":[3,23,3,55],"129":[3,23,3,55],"137":[3,12,3,56],"145":[3,12,3,56],"153":[3,12,3,56],"161":[5,1,5,5],"169":[5,13,5,14],"177":[5,1,5,15],"179":[5,1,5,12],"185":[5,1,5,16],"193":[6,1,6,5],"201":[6,14,6,15],"209":[6,1,6,16],"211":[6,1,6,12],"217":[6,1,6,17],"225":[1,1,7,1],"233":[1,1,7,1],"241":[1,1,7,1],"249":[3,23,3,55],"257":[3,23,3,55],"265":[1,1,7,1],"273":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var RBTree = require('bintrees').RBTree;\n\nvar tree = new RBTree(function(a, b) { return a - b; });\n\ntree.insert(2);\ntree.insert(-3);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'RBTree', RBTree, 0);
            J$.N(241, 'tree', tree, 0);
            var RBTree = J$.X1(49, J$.W(41, 'RBTree', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'bintrees', 21, false)), 'RBTree', 0), RBTree, 3));
            var tree = J$.X1(153, J$.W(145, 'tree', J$.F(137, J$.R(57, 'RBTree', RBTree, 1), 1)(J$.T(129, function (a, b) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            a = J$.N(113, 'a', a, 4);
                            b = J$.N(121, 'b', b, 4);
                            return J$.X1(89, J$.Rt(81, J$.B(10, '-', J$.R(65, 'a', a, 0), J$.R(73, 'b', b, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(249, J$e);
                        } finally {
                            if (J$.Fr(257))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 97)), tree, 3));
            J$.X1(185, J$.M(177, J$.R(161, 'tree', tree, 1), 'insert', 0)(J$.T(169, 2, 22, false)));
            J$.X1(217, J$.M(209, J$.R(193, 'tree', tree, 1), 'insert', 0)(J$.U(18, '-', J$.T(201, 3, 22, false))));
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
