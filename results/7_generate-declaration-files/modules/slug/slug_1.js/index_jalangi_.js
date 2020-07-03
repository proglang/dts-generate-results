J$.iids = {"9":[1,12,1,19],"17":[1,20,1,26],"25":[1,12,1,27],"33":[1,12,1,27],"41":[1,12,1,27],"49":[2,13,2,20],"57":[2,13,2,24],"65":[2,30,2,37],"73":[2,39,2,42],"81":[2,13,2,43],"83":[2,13,2,29],"89":[2,13,2,43],"97":[2,13,2,43],"105":[4,1,4,6],"113":[4,7,4,11],"121":[4,12,4,25],"129":[4,7,4,26],"137":[4,1,4,27],"145":[4,1,4,27],"153":[7,1,7,6],"161":[7,7,7,11],"169":[7,12,7,28],"177":[7,7,7,29],"185":[7,1,7,30],"193":[7,1,7,30],"201":[10,1,10,6],"209":[10,7,10,11],"217":[10,12,10,25],"225":[10,27,10,30],"233":[10,7,10,31],"241":[10,1,10,32],"249":[10,1,10,32],"257":[13,1,13,5],"265":[13,1,13,13],"273":[13,14,13,17],"281":[13,21,13,36],"289":[13,1,13,36],"297":[13,1,13,36],"305":[14,1,14,6],"313":[14,7,14,11],"321":[14,12,14,25],"329":[14,7,14,26],"337":[14,1,14,27],"345":[14,1,14,27],"353":[17,1,17,6],"361":[17,7,17,11],"369":[17,12,17,22],"377":[17,32,17,36],"385":[17,24,17,37],"393":[17,7,17,38],"401":[17,1,17,39],"409":[17,1,17,39],"417":[20,1,20,6],"425":[20,7,20,11],"433":[20,12,20,26],"441":[20,7,20,27],"449":[20,1,20,28],"457":[20,1,20,28],"465":[1,1,22,1],"473":[1,1,22,1],"481":[1,1,22,1],"489":[1,1,22,1],"497":[1,1,22,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var slug = require('slug')\nvar print = console.log.bind(console, '>')\n\nprint(slug('i ♥ unicode'))\n// > i-love-unicode\n\nprint(slug('unicode ♥ is ☢')) // yes!\n// > unicode-love-is-radioactive\n\nprint(slug('i ♥ unicode', '_')) // If you prefer something else than `-` as separator\n// > i_love_unicode\n\nslug.charmap['♥'] = 'freaking love' // change default charmap or use option {charmap:{…}} as 2. argument\nprint(slug('I ♥ UNICODE'))\n// > I-freaking-love-UNICODE\n\nprint(slug('☏-Number', {lower: true})) // If you prefer lower case\n// > telephone-number\n\nprint(slug('i <3 unicode'))\n// > i-love-unicode\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(465, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(473, 'slug', slug, 0);
            J$.N(481, 'print', print, 0);
            var slug = J$.X1(41, J$.W(33, 'slug', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'slug', 21, false)), slug, 3));
            var print = J$.X1(97, J$.W(89, 'print', J$.M(81, J$.G(57, J$.R(49, 'console', console, 2), 'log', 0), 'bind', 0)(J$.R(65, 'console', console, 2), J$.T(73, '>', 21, false)), print, 3));
            J$.X1(145, J$.F(137, J$.R(105, 'print', print, 1), 0)(J$.F(129, J$.R(113, 'slug', slug, 1), 0)(J$.T(121, 'i ♥ unicode', 21, false))));
            J$.X1(193, J$.F(185, J$.R(153, 'print', print, 1), 0)(J$.F(177, J$.R(161, 'slug', slug, 1), 0)(J$.T(169, 'unicode ♥ is ☢', 21, false))));
            J$.X1(249, J$.F(241, J$.R(201, 'print', print, 1), 0)(J$.F(233, J$.R(209, 'slug', slug, 1), 0)(J$.T(217, 'i ♥ unicode', 21, false), J$.T(225, '_', 21, false))));
            J$.X1(297, J$.P(289, J$.G(265, J$.R(257, 'slug', slug, 1), 'charmap', 0), J$.T(273, '♥', 21, false), J$.T(281, 'freaking love', 21, false), 2));
            J$.X1(345, J$.F(337, J$.R(305, 'print', print, 1), 0)(J$.F(329, J$.R(313, 'slug', slug, 1), 0)(J$.T(321, 'I ♥ UNICODE', 21, false))));
            J$.X1(409, J$.F(401, J$.R(353, 'print', print, 1), 0)(J$.F(393, J$.R(361, 'slug', slug, 1), 0)(J$.T(369, '☏-Number', 21, false), J$.T(385, {
                lower: J$.T(377, true, 23, false)
            }, 11, false))));
            J$.X1(457, J$.F(449, J$.R(417, 'print', print, 1), 0)(J$.F(441, J$.R(425, 'slug', slug, 1), 0)(J$.T(433, 'i <3 unicode', 21, false))));
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
