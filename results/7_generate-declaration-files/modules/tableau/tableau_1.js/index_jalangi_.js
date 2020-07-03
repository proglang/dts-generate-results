J$.iids = {"9":[1,15,1,22],"10":[5,10,5,27],"17":[1,23,1,32],"18":[5,10,5,34],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[2,13,2,41],"57":[2,48,2,50],"65":[2,13,2,51],"67":[2,13,2,47],"73":[2,13,2,51],"81":[2,13,2,51],"89":[3,11,3,18],"97":[3,19,3,24],"105":[3,11,3,25],"113":[3,11,3,25],"121":[3,11,3,25],"129":[4,11,4,14],"137":[5,10,5,11],"145":[5,14,5,15],"153":[5,21,5,26],"161":[5,14,5,27],"163":[5,14,5,20],"169":[5,30,5,34],"177":[5,10,5,34],"185":[5,3,5,35],"193":[4,22,6,2],"201":[4,22,6,2],"209":[4,22,6,2],"217":[4,22,6,2],"225":[4,22,6,2],"233":[6,4,6,6],"241":[4,11,6,7],"243":[4,11,4,21],"249":[4,11,6,7],"257":[4,11,6,7],"265":[8,1,8,8],"273":[8,13,8,16],"281":[8,1,8,17],"283":[8,1,8,12],"289":[8,1,8,18],"297":[1,1,9,1],"305":[1,1,9,1],"313":[1,1,9,1],"321":[1,1,9,1],"329":[1,1,9,1],"337":[4,22,6,2],"345":[4,22,6,2],"353":[1,1,9,1],"361":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var tableau = require('tableau')\nvar alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');\nvar mat = tableau(alpha);\nvar out = mat.reduce(function (p, c) {\n  return p + c.join(' | ') + '\\n';\n}, \"\");\n\nconsole.log(out);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'tableau', tableau, 0);
            J$.N(313, 'alpha', alpha, 0);
            J$.N(321, 'mat', mat, 0);
            J$.N(329, 'out', out, 0);
            var tableau = J$.X1(41, J$.W(33, 'tableau', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'tableau', 21, false)), tableau, 3));
            var alpha = J$.X1(81, J$.W(73, 'alpha', J$.M(65, J$.T(49, 'abcdefghijklmnopqrstuvwxyz', 21, false), 'split', 0)(J$.T(57, '', 21, false)), alpha, 3));
            var mat = J$.X1(121, J$.W(113, 'mat', J$.F(105, J$.R(89, 'tableau', tableau, 1), 0)(J$.R(97, 'alpha', alpha, 1)), mat, 3));
            var out = J$.X1(257, J$.W(249, 'out', J$.M(241, J$.R(129, 'mat', mat, 1), 'reduce', 0)(J$.T(225, function (p, c) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            p = J$.N(209, 'p', p, 4);
                            c = J$.N(217, 'c', c, 4);
                            return J$.X1(185, J$.Rt(177, J$.B(18, '+', J$.B(10, '+', J$.R(137, 'p', p, 0), J$.M(161, J$.R(145, 'c', c, 0), 'join', 0)(J$.T(153, ' | ', 21, false)), 0), J$.T(169, '\n', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193), J$.T(233, "", 21, false)), out, 3));
            J$.X1(289, J$.M(281, J$.R(265, 'console', console, 2), 'log', 0)(J$.R(273, 'out', out, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
