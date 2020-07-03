J$.iids = {"9":[2,10,2,17],"17":[2,18,2,31],"25":[2,10,2,32],"33":[2,10,2,34],"41":[3,24,3,30],"49":[3,32,3,39],"57":[3,22,3,41],"65":[2,10,3,42],"67":[2,10,3,21],"73":[4,23,4,29],"81":[4,21,4,31],"89":[2,10,4,32],"91":[2,10,4,20],"97":[5,21,5,28],"105":[2,10,5,29],"107":[2,10,5,20],"113":[2,10,5,29],"121":[2,10,5,29],"129":[8,6,8,13],"137":[8,14,8,27],"145":[8,6,8,28],"153":[9,9,9,13],"161":[10,12,10,16],"169":[11,16,11,20],"177":[8,29,12,2],"185":[8,6,12,3],"193":[8,6,12,3],"201":[8,1,12,4],"209":[1,1,13,1],"217":[1,1,13,1],"225":[1,1,13,1],"233":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Activate/deactivate rules, with curring\nvar md = require('markdown-it')()\n            .disable([ 'link', 'image' ])\n            .enable([ 'link' ])\n            .enable('image');\n\n// Enable everything\nmd = require('markdown-it')({\n  html: true,\n  linkify: true,\n  typographer: true,\n});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'md', md, 0);
            var md = J$.X1(121, J$.W(113, 'md', J$.M(105, J$.M(89, J$.M(65, J$.F(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'markdown-it', 21, false)), 0)(), 'disable', 0)(J$.T(57, [
                J$.T(41, 'link', 21, false),
                J$.T(49, 'image', 21, false)
            ], 10, false)), 'enable', 0)(J$.T(81, [J$.T(73, 'link', 21, false)], 10, false)), 'enable', 0)(J$.T(97, 'image', 21, false)), md, 3));
            J$.X1(201, md = J$.W(193, 'md', J$.F(185, J$.F(145, J$.R(129, 'require', require, 2), 0)(J$.T(137, 'markdown-it', 21, false)), 0)(J$.T(177, {
                html: J$.T(153, true, 23, false),
                linkify: J$.T(161, true, 23, false),
                typographer: J$.T(169, true, 23, false)
            }, 11, false)), md, 2));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
