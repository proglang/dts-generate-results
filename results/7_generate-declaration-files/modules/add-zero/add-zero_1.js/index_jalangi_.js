J$.iids = {"9":[1,15,1,22],"10":[7,9,7,11],"17":[1,23,1,33],"18":[8,9,8,11],"25":[1,15,1,34],"33":[1,15,1,34],"41":[1,15,1,34],"49":[3,1,3,8],"57":[3,9,3,10],"65":[3,1,3,11],"73":[3,1,3,12],"81":[4,1,4,8],"89":[4,9,4,11],"97":[4,1,4,12],"105":[4,1,4,13],"113":[5,1,5,8],"121":[5,9,5,10],"129":[5,12,5,13],"137":[5,1,5,14],"145":[5,1,5,15],"153":[6,1,6,8],"161":[6,9,6,12],"169":[6,14,6,15],"177":[6,1,6,16],"185":[6,1,6,17],"193":[7,1,7,8],"201":[7,10,7,11],"209":[7,1,7,12],"217":[7,1,7,13],"225":[8,1,8,8],"233":[8,10,8,11],"241":[8,13,8,14],"249":[8,1,8,15],"257":[8,1,8,16],"265":[1,1,9,1],"273":[1,1,9,1],"281":[1,1,9,1],"289":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var addZero = require('add-zero');\n\naddZero(5); // 05\naddZero(10); // 10\naddZero(5, 3); // 005\naddZero(100, 3); // 100\naddZero(-5); // -05\naddZero(-5, 3); // -005\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(273, 'addZero', addZero, 0);
            var addZero = J$.X1(41, J$.W(33, 'addZero', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'add-zero', 21, false)), addZero, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'addZero', addZero, 1), 0)(J$.T(57, 5, 22, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'addZero', addZero, 1), 0)(J$.T(89, 10, 22, false)));
            J$.X1(145, J$.F(137, J$.R(113, 'addZero', addZero, 1), 0)(J$.T(121, 5, 22, false), J$.T(129, 3, 22, false)));
            J$.X1(185, J$.F(177, J$.R(153, 'addZero', addZero, 1), 0)(J$.T(161, 100, 22, false), J$.T(169, 3, 22, false)));
            J$.X1(217, J$.F(209, J$.R(193, 'addZero', addZero, 1), 0)(J$.U(10, '-', J$.T(201, 5, 22, false))));
            J$.X1(257, J$.F(249, J$.R(225, 'addZero', addZero, 1), 0)(J$.U(18, '-', J$.T(233, 5, 22, false)), J$.T(241, 3, 22, false)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
