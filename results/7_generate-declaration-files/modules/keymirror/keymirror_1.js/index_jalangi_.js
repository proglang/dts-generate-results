J$.iids = {"9":[1,17,1,24],"10":[4,21,4,37],"17":[1,25,1,36],"18":[4,20,4,37],"25":[1,17,1,37],"33":[1,17,1,37],"41":[1,17,1,37],"49":[2,14,2,23],"57":[2,31,2,35],"65":[2,42,2,46],"73":[2,24,2,47],"81":[2,14,2,48],"89":[2,14,2,48],"97":[2,14,2,48],"105":[3,15,3,21],"113":[3,15,3,26],"121":[3,15,3,26],"129":[3,15,3,26],"137":[4,22,4,28],"145":[4,29,4,36],"153":[4,22,4,37],"161":[4,20,4,37],"169":[4,20,4,37],"177":[1,1,5,1],"185":[1,1,5,1],"193":[1,1,5,1],"201":[1,1,5,1],"209":[1,1,5,1],"217":[1,1,5,1],"225":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var keyMirror = require('keymirror');\nvar COLORS = keyMirror({blue: null, red: null});\nvar myColor = COLORS.blue;\nvar isColorValid = !!COLORS[myColor];\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'keyMirror', keyMirror, 0);
            J$.N(193, 'COLORS', COLORS, 0);
            J$.N(201, 'myColor', myColor, 0);
            J$.N(209, 'isColorValid', isColorValid, 0);
            var keyMirror = J$.X1(41, J$.W(33, 'keyMirror', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'keymirror', 21, false)), keyMirror, 3));
            var COLORS = J$.X1(97, J$.W(89, 'COLORS', J$.F(81, J$.R(49, 'keyMirror', keyMirror, 1), 0)(J$.T(73, {
                blue: J$.T(57, null, 25, false),
                red: J$.T(65, null, 25, false)
            }, 11, false)), COLORS, 3));
            var myColor = J$.X1(129, J$.W(121, 'myColor', J$.G(113, J$.R(105, 'COLORS', COLORS, 1), 'blue', 0), myColor, 3));
            var isColorValid = J$.X1(169, J$.W(161, 'isColorValid', J$.U(18, '!', J$.U(10, '!', J$.G(153, J$.R(137, 'COLORS', COLORS, 1), J$.R(145, 'myColor', myColor, 1), 4))), isColorValid, 3));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
