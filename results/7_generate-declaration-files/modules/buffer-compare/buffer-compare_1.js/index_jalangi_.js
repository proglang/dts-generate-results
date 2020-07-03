J$.iids = {"9":[1,17,1,24],"10":[4,55,4,57],"17":[1,25,1,41],"18":[4,3,4,57],"25":[1,17,1,42],"26":[7,3,7,56],"33":[1,17,1,42],"34":[10,3,10,51],"41":[1,17,1,42],"49":[4,3,4,10],"57":[4,15,4,21],"65":[4,22,4,28],"73":[4,11,4,29],"81":[4,34,4,40],"89":[4,41,4,48],"97":[4,30,4,49],"105":[4,3,4,50],"113":[4,56,4,57],"121":[4,3,4,57],"129":[7,3,7,10],"137":[7,15,7,21],"145":[7,22,7,30],"153":[7,11,7,31],"161":[7,36,7,42],"169":[7,43,7,48],"177":[7,32,7,49],"185":[7,3,7,50],"193":[7,55,7,56],"201":[7,3,7,56],"209":[10,3,10,10],"217":[10,15,10,21],"225":[10,22,10,26],"233":[10,11,10,27],"241":[10,32,10,38],"249":[10,39,10,43],"257":[10,28,10,44],"265":[10,3,10,45],"273":[10,50,10,51],"281":[10,3,10,51],"289":[1,1,12,1],"297":[1,1,12,1],"305":[1,1,12,1],"313":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"  var compare = require('buffer-compare');\n\n  // smaller\n  compare(new Buffer('abcd'),new Buffer('abcde')) === -1\n\n  // bigger\n  compare(new Buffer('abcdef'),new Buffer('abc')) === 1\n\n  // equal\n  compare(new Buffer('hi'),new Buffer('hi')) === 0\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(297, 'compare', compare, 0);
            var compare = J$.X1(41, J$.W(33, 'compare', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'buffer-compare', 21, false)), compare, 3));
            J$.X1(121, J$.B(18, '===', J$.F(105, J$.R(49, 'compare', compare, 1), 0)(J$.F(73, J$.R(57, 'Buffer', Buffer, 2), 1)(J$.T(65, 'abcd', 21, false)), J$.F(97, J$.R(81, 'Buffer', Buffer, 2), 1)(J$.T(89, 'abcde', 21, false))), J$.U(10, '-', J$.T(113, 1, 22, false)), 0));
            J$.X1(201, J$.B(26, '===', J$.F(185, J$.R(129, 'compare', compare, 1), 0)(J$.F(153, J$.R(137, 'Buffer', Buffer, 2), 1)(J$.T(145, 'abcdef', 21, false)), J$.F(177, J$.R(161, 'Buffer', Buffer, 2), 1)(J$.T(169, 'abc', 21, false))), J$.T(193, 1, 22, false), 0));
            J$.X1(281, J$.B(34, '===', J$.F(265, J$.R(209, 'compare', compare, 1), 0)(J$.F(233, J$.R(217, 'Buffer', Buffer, 2), 1)(J$.T(225, 'hi', 21, false)), J$.F(257, J$.R(241, 'Buffer', Buffer, 2), 1)(J$.T(249, 'hi', 21, false))), J$.T(273, 0, 22, false), 0));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
