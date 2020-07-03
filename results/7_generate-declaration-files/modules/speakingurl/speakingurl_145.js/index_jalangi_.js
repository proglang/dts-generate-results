J$.iids = {"9":[3,10,3,13],"17":[3,14,3,18],"25":[3,19,3,24],"33":[3,25,3,29],"41":[3,30,3,34],"49":[3,35,3,40],"57":[4,10,4,14],"65":[4,15,4,19],"73":[4,20,4,25],"81":[4,26,4,30],"89":[4,31,4,35],"97":[4,36,4,41],"105":[5,10,5,14],"113":[5,15,5,19],"121":[5,20,5,24],"129":[5,25,5,30],"137":[5,31,5,36],"145":[5,37,5,41],"153":[5,42,5,46],"161":[2,17,6,7],"169":[1,15,7,3],"177":[1,15,7,3],"185":[1,15,7,3],"193":[9,14,9,21],"201":[9,22,9,35],"209":[9,14,9,36],"217":[9,48,9,55],"225":[9,14,9,56],"227":[9,14,9,47],"233":[9,14,9,56],"241":[9,14,9,56],"249":[13,12,13,18],"257":[13,19,13,42],"265":[13,12,13,43],"273":[13,12,13,43],"281":[13,12,13,43],"289":[14,1,14,8],"297":[14,13,14,17],"305":[14,1,14,18],"307":[14,1,14,12],"313":[14,1,14,19],"321":[1,1,15,1],"329":[1,1,15,1],"337":[1,1,15,1],"345":[1,1,15,1],"353":[1,1,15,1],"361":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var options = {\n\t    titleCase: [\n\t        \"a\",\"an\",\"and\",\"as\",\"at\",\"but\",\n\t        \"by\",\"en\",\"for\",\"if\",\"in\",\"nor\",\n\t        \"of\",\"on\",\"or\",\"per\",\"the\",\"to\",\"vs\"\n\t    ]\n\t};\n\nvar mySlug = require('speakingurl').createSlug(options);\n// in browser:\n// var mySlug = createSlug(options);\n\nvar slug = mySlug('welcome to the jungle');\nconsole.log(slug); // Output: Welcome-to-the-Jungle\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(321, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(329, 'options', options, 0);
            J$.N(337, 'mySlug', mySlug, 0);
            J$.N(345, 'slug', slug, 0);
            var options = J$.X1(185, J$.W(177, 'options', J$.T(169, {
                titleCase: J$.T(161, [
                    J$.T(9, "a", 21, false),
                    J$.T(17, "an", 21, false),
                    J$.T(25, "and", 21, false),
                    J$.T(33, "as", 21, false),
                    J$.T(41, "at", 21, false),
                    J$.T(49, "but", 21, false),
                    J$.T(57, "by", 21, false),
                    J$.T(65, "en", 21, false),
                    J$.T(73, "for", 21, false),
                    J$.T(81, "if", 21, false),
                    J$.T(89, "in", 21, false),
                    J$.T(97, "nor", 21, false),
                    J$.T(105, "of", 21, false),
                    J$.T(113, "on", 21, false),
                    J$.T(121, "or", 21, false),
                    J$.T(129, "per", 21, false),
                    J$.T(137, "the", 21, false),
                    J$.T(145, "to", 21, false),
                    J$.T(153, "vs", 21, false)
                ], 10, false)
            }, 11, false), options, 3));
            var mySlug = J$.X1(241, J$.W(233, 'mySlug', J$.M(225, J$.F(209, J$.R(193, 'require', require, 2), 0)(J$.T(201, 'speakingurl', 21, false)), 'createSlug', 0)(J$.R(217, 'options', options, 1)), mySlug, 3));
            var slug = J$.X1(281, J$.W(273, 'slug', J$.F(265, J$.R(249, 'mySlug', mySlug, 1), 0)(J$.T(257, 'welcome to the jungle', 21, false)), slug, 3));
            J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.R(297, 'slug', slug, 1)));
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
