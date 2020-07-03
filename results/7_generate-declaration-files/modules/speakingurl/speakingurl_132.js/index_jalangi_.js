J$.iids = {"9":[2,20,2,24],"17":[3,17,3,20],"25":[1,15,4,3],"33":[1,15,4,3],"41":[1,15,4,3],"49":[6,14,6,21],"57":[6,22,6,35],"65":[6,14,6,36],"73":[6,48,6,55],"81":[6,14,6,56],"83":[6,14,6,47],"89":[6,14,6,56],"97":[6,14,6,56],"105":[10,12,10,18],"113":[10,19,10,58],"121":[10,12,10,59],"129":[10,12,10,59],"137":[10,12,10,59],"145":[11,1,11,8],"153":[11,13,11,17],"161":[11,1,11,18],"163":[11,1,11,12],"169":[11,1,11,19],"177":[1,1,12,1],"185":[1,1,12,1],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var options = {\n\t    maintainCase: true,\n\t    separator: '_'\n\t};\n\nvar mySlug = require('speakingurl').createSlug(options);\n// in browser:\n// var mySlug = createSlug(options);\n\nvar slug = mySlug(\"Schöner Titel läßt grüßen!? Bel été !\");\nconsole.log(slug); // Output: Schoener_Titel_laesst_gruessen_Bel_ete\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'options', options, 0);
            J$.N(193, 'mySlug', mySlug, 0);
            J$.N(201, 'slug', slug, 0);
            var options = J$.X1(41, J$.W(33, 'options', J$.T(25, {
                maintainCase: J$.T(9, true, 23, false),
                separator: J$.T(17, '_', 21, false)
            }, 11, false), options, 3));
            var mySlug = J$.X1(97, J$.W(89, 'mySlug', J$.M(81, J$.F(65, J$.R(49, 'require', require, 2), 0)(J$.T(57, 'speakingurl', 21, false)), 'createSlug', 0)(J$.R(73, 'options', options, 1)), mySlug, 3));
            var slug = J$.X1(137, J$.W(129, 'slug', J$.F(121, J$.R(105, 'mySlug', mySlug, 1), 0)(J$.T(113, "Schöner Titel läßt grüßen!? Bel été !", 21, false)), slug, 3));
            J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.R(153, 'slug', slug, 1)));
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
