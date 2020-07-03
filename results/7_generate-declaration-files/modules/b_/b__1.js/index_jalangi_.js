J$.iids = {"9":[1,9,1,16],"10":[4,1,4,54],"17":[1,17,1,21],"18":[7,1,7,74],"25":[1,9,1,22],"26":[10,1,10,42],"33":[1,9,1,22],"34":[11,1,11,55],"41":[1,9,1,22],"49":[4,1,4,2],"57":[4,3,4,11],"65":[4,20,4,24],"73":[4,13,4,25],"81":[4,1,4,26],"89":[4,31,4,54],"97":[4,1,4,55],"105":[7,1,7,2],"113":[7,3,7,10],"121":[7,12,7,19],"129":[7,28,7,32],"137":[7,21,7,33],"145":[7,1,7,34],"153":[7,39,7,74],"161":[7,1,7,75],"169":[10,1,10,2],"177":[10,3,10,11],"185":[10,22,10,27],"193":[10,13,10,28],"201":[10,1,10,29],"209":[10,34,10,42],"217":[10,1,10,43],"225":[11,1,11,2],"233":[11,3,11,11],"241":[11,22,11,26],"249":[11,13,11,27],"257":[11,1,11,28],"265":[11,33,11,55],"273":[11,1,11,56],"281":[1,1,12,1],"289":[1,1,12,1],"297":[1,1,12,1],"305":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var b = require('b_');\n\n// blocks\nb('button', {size: 'xl'}) === 'button button_size_xl';\n\n// block elements\nb('modal', 'close', {size: 'xl'}) === 'modal__close modal__close_size_xl';\n\n// boolean modifiers\nb('button', {hidden: false}) === 'button';\nb('button', {hidden: true}) === 'button button_hidden';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'b', b, 0);
            var b = J$.X1(41, J$.W(33, 'b', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'b_', 21, false)), b, 3));
            J$.X1(97, J$.B(10, '===', J$.F(81, J$.R(49, 'b', b, 1), 0)(J$.T(57, 'button', 21, false), J$.T(73, {
                size: J$.T(65, 'xl', 21, false)
            }, 11, false)), J$.T(89, 'button button_size_xl', 21, false), 0));
            J$.X1(161, J$.B(18, '===', J$.F(145, J$.R(105, 'b', b, 1), 0)(J$.T(113, 'modal', 21, false), J$.T(121, 'close', 21, false), J$.T(137, {
                size: J$.T(129, 'xl', 21, false)
            }, 11, false)), J$.T(153, 'modal__close modal__close_size_xl', 21, false), 0));
            J$.X1(217, J$.B(26, '===', J$.F(201, J$.R(169, 'b', b, 1), 0)(J$.T(177, 'button', 21, false), J$.T(193, {
                hidden: J$.T(185, false, 23, false)
            }, 11, false)), J$.T(209, 'button', 21, false), 0));
            J$.X1(273, J$.B(34, '===', J$.F(257, J$.R(225, 'b', b, 1), 0)(J$.T(233, 'button', 21, false), J$.T(249, {
                hidden: J$.T(241, true, 23, false)
            }, 11, false)), J$.T(265, 'button button_hidden', 21, false), 0));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
