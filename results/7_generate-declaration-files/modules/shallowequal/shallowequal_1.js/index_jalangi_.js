J$.iids = {"9":[1,20,1,27],"10":[6,1,6,16],"17":[1,28,1,42],"25":[1,20,1,43],"33":[1,20,1,43],"41":[1,20,1,43],"49":[3,22,3,28],"57":[3,14,3,30],"65":[3,14,3,30],"73":[3,14,3,30],"81":[4,21,4,27],"89":[4,13,4,29],"97":[4,13,4,29],"105":[4,13,4,29],"113":[6,1,6,7],"121":[6,11,6,16],"129":[6,1,6,17],"137":[9,1,9,13],"145":[9,14,9,20],"153":[9,22,9,27],"161":[9,1,9,28],"169":[9,1,9,29],"177":[1,1,11,1],"185":[1,1,11,1],"193":[1,1,11,1],"201":[1,1,11,1],"209":[1,1,11,1],"217":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var shallowequal = require(\"shallowequal\");\n\nvar object = { user: \"fred\" };\nvar other = { user: \"fred\" };\n\nobject == other;\n// → false\n\nshallowequal(object, other);\n// → true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'shallowequal', shallowequal, 0);
            J$.N(193, 'object', object, 0);
            J$.N(201, 'other', other, 0);
            var shallowequal = J$.X1(41, J$.W(33, 'shallowequal', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "shallowequal", 21, false)), shallowequal, 3));
            var object = J$.X1(73, J$.W(65, 'object', J$.T(57, {
                user: J$.T(49, "fred", 21, false)
            }, 11, false), object, 3));
            var other = J$.X1(105, J$.W(97, 'other', J$.T(89, {
                user: J$.T(81, "fred", 21, false)
            }, 11, false), other, 3));
            J$.X1(129, J$.B(10, '==', J$.R(113, 'object', object, 1), J$.R(121, 'other', other, 1), 0));
            J$.X1(169, J$.F(161, J$.R(137, 'shallowequal', shallowequal, 1), 0)(J$.R(145, 'object', object, 1), J$.R(153, 'other', other, 1)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
