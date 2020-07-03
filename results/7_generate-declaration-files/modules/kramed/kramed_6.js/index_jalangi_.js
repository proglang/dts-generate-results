J$.iids = {"9":[1,14,1,21],"17":[1,22,1,30],"25":[1,14,1,31],"33":[1,14,1,31],"41":[1,14,1,31],"49":[2,1,2,7],"57":[3,17,3,23],"65":[3,13,3,34],"67":[3,17,3,32],"73":[4,8,4,12],"81":[5,11,5,15],"89":[6,11,6,16],"97":[7,13,7,18],"105":[8,13,8,17],"113":[9,15,9,19],"121":[10,16,10,21],"129":[2,19,11,2],"137":[2,1,11,3],"139":[2,1,2,18],"145":[2,1,11,4],"153":[13,1,13,8],"161":[13,13,13,19],"169":[13,20,13,46],"177":[13,13,13,47],"185":[13,1,13,48],"187":[13,1,13,12],"193":[13,1,13,49],"201":[1,1,14,1],"209":[1,1,14,1],"217":[1,1,14,1],"225":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var kramed = require('kramed');\nkramed.setOptions({\n  renderer: new kramed.Renderer(),\n  gfm: true,\n  tables: true,\n  breaks: false,\n  pedantic: false,\n  sanitize: true,\n  smartLists: true,\n  smartypants: false\n});\n\nconsole.log(kramed('I am using __markdown__.'));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(209, 'kramed', kramed, 0);
            var kramed = J$.X1(41, J$.W(33, 'kramed', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'kramed', 21, false)), kramed, 3));
            J$.X1(145, J$.M(137, J$.R(49, 'kramed', kramed, 1), 'setOptions', 0)(J$.T(129, {
                renderer: J$.M(65, J$.R(57, 'kramed', kramed, 1), 'Renderer', 2)(),
                gfm: J$.T(73, true, 23, false),
                tables: J$.T(81, true, 23, false),
                breaks: J$.T(89, false, 23, false),
                pedantic: J$.T(97, false, 23, false),
                sanitize: J$.T(105, true, 23, false),
                smartLists: J$.T(113, true, 23, false),
                smartypants: J$.T(121, false, 23, false)
            }, 11, false)));
            J$.X1(193, J$.M(185, J$.R(153, 'console', console, 2), 'log', 0)(J$.F(177, J$.R(161, 'kramed', kramed, 1), 0)(J$.T(169, 'I am using __markdown__.', 21, false))));
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
